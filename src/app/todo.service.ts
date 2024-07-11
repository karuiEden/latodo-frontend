import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../environments/environment.development";

export interface TodoUnit {
  ID: number;
  name: string;
  IsCompleted: boolean;
  CreatedAt: string;
}


@Injectable(
  {
    providedIn: "root",
  }
) export class TodoService {
  url = environment.url;
  private tasksSubject: BehaviorSubject<TodoUnit[]> = new BehaviorSubject<TodoUnit[]>([]);

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  get task$(): Observable<TodoUnit[]> {
    return this.tasksSubject.asObservable();
  }

  loadTasks(): void {
    this.http.get<TodoUnit[]>(`${this.url}/tasks`).subscribe({
        next: (tasks) => {
          this.tasksSubject.next(tasks);
        },
      }
    )
  }

  getTask(id: number): Observable<TodoUnit> {
    return this.http.get<TodoUnit>(`${this.url}/tasks/${id}`);
  }

  completeTask(id: number, IsCompleted: boolean): Observable<TodoUnit> {
    return this.http.patch<TodoUnit>(`${this.url}/tasks/${id}`, {IsCompleted});
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/tasks/${id}`).pipe(
      map(() => {
        const currentTask = this.tasksSubject.getValue();
        const updatedTasks = currentTask.filter((task) => task.ID !== id);
        this.tasksSubject.next(updatedTasks);
      })
    );
  }

  createTask(name: String): Observable<TodoUnit> {
    return this.http.post<TodoUnit>(`${this.url}/tasks`, {name}).pipe(
      map(task => {
        const currentTask = this.tasksSubject.getValue();
        this.tasksSubject.next([...currentTask, task]);
        return task;
      })
    );
  }
}

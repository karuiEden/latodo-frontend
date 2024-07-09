import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  url = "http://localhost:8080";
  constructor(private http: HttpClient) { }

 getTasks(): Observable<TodoUnit[]> {
    return this.http.get<TodoUnit[]>(`${this.url}/tasks`);
  }

  getTask(id: number): Observable<TodoUnit> {
    return this.http.get<TodoUnit>(`${this.url}/tasks/${id}`);
  }

  completeTask(id: number, IsCompleted: boolean): Observable<TodoUnit> {
    return this.http.patch<TodoUnit>(`${this.url}/tasks/${id}`, {IsCompleted});
  }
}

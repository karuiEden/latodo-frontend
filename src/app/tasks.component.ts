import {ChangeDetectionStrategy, Component} from "@angular/core";
import {TodoUnitComponent} from "./todo.component";
import { CommonModule } from '@angular/common';
import {TodoService, TodoUnit} from "./todo.service";
import {Observable} from "rxjs";
import {CreateTaskComponent} from "./createTask.component";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-tasks",
  styleUrl: "./menu.css",
  template: `
    <ng-container class="la-tasks" *ngIf="tasks$ | async as tasks">
      <create-task (NewTaskTrigger)="createTask($event)"/>
      @for (task of tasks; track task.ID) {
        <li>
          <todo-unit [UnitID]="task.ID" (trigger)="deleteTask(task.ID)"></todo-unit>
        </li>
      }
    </ng-container>
    `,
  imports: [
    TodoUnitComponent,
    CommonModule,
    CreateTaskComponent,

  ],
  standalone: true
})
export class TaskComponent {
  tasks$!: Observable<TodoUnit[]>;
  constructor(private taskService: TodoService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.task$;
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({error: (error)=> console.log(error)});
  }

  createTask(taskName: string): void {
    this.taskService.createTask(taskName).subscribe({next : ()=>{this.ngOnInit()} ,error: (error)=> console.log(error)});
  }
}

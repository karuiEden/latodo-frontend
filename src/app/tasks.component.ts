import {Component} from "@angular/core";
import {TodoUnitComponent} from "./todo.component";
import { CommonModule } from '@angular/common';
import {TodoService, TodoUnit} from "./todo.service";
import {Observable} from "rxjs";
@Component({
  selector: "app-tasks",
  styleUrl: "./menu.css",
  template: `
        <ng-container class="la-tasks" *ngIf="tasks$ | async as tasks">
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

  ],
  standalone: true
})
export class TaskComponent {
  tasks$!: Observable<TodoUnit[]>;

  constructor(private taskService: TodoService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({complete: () => this.tasks$ = this.taskService.getTasks(), error: (error)=> console.log(error)});
  }
}

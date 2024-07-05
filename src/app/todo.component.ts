import {Component, Input} from "@angular/core";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TodoService, TodoUnit} from "./todo.service";
import {Observable} from "rxjs";

@Component({
  selector: "todo-unit",
  standalone: true,
  styleUrl: "./todo.css",
  imports: [
    DatePipe,
    FormsModule,
    AsyncPipe,
    NgIf
  ],
  template: `
    <div class="todo-unit">
    <ng-container *ngIf="task$ | async as task">
      <input type="checkbox" [checked]="task.isComplete" (change)="updateComplete(task.isComplete)" />
        <p>{{ task.name }}</p>
      <p>{{ task.CreatedAt | date }}</p>
    </ng-container>
    </div>`
})
export class TodoUnitComponent {
  @Input() UnitID!: number;
  task$!: Observable<TodoUnit>;
  constructor(private taskService: TodoService) {}

  updateComplete(isDone: boolean) {
    this.task$ = this.taskService.completeTask(this.UnitID, !isDone);
  }
  ngOnInit(){
    this.task$ = this.taskService.getTask(this.UnitID);
  }
}

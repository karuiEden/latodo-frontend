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
      <input type="checkbox" [checked]="task.IsCompleted" (change)="updateComplete(task)"  />
        <p>{{ task.name }}</p>
      <p>{{ task.CreatedAt | date }}</p>
    </ng-container>
    </div>`
})
export class TodoUnitComponent {
  @Input() UnitID!: number;
  task$!: Observable<TodoUnit>;
  constructor(private taskService: TodoService) {}

  updateComplete(task: TodoUnit) {
    task.IsCompleted = !task.IsCompleted;
    this.taskService.completeTask(this.UnitID, task.IsCompleted).subscribe();
    this.taskService.getTask(this.UnitID).subscribe();
  }
  ngOnInit(){
    this.task$ = this.taskService.getTask(this.UnitID);
  }
}

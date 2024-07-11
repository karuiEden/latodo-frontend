import {Component, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "create-task",
  styleUrls: ["./todo.css", "createtask.css"],
  template: `
    <form class="taskForm" [formGroup]="NewTask" (ngSubmit)="this.triggerTask(NewTask.value.name)">
      <input type="text" class="text-input" placeholder="Enter your task..." formControlName="name">
      <input type="image" class="submit-btn" src="/create-btn.svg" alt="submit">
    </form>
  `,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true
})export class CreateTaskComponent {

  @Output() NewTaskTrigger:EventEmitter<string> = new EventEmitter();
  NewTask: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  triggerTask(taskName: string): void {
    this.NewTaskTrigger.emit(taskName);
  }
}

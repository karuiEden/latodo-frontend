import {Component, Input} from "@angular/core";
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "todo-unit",
  standalone: true,
  styleUrl: "./todo.css",
  imports: [
    DatePipe,
    FormsModule
  ],
  template: `
    <div class="todo-unit" (click)="showDescription()">
      <input type="checkbox" [ngModel]="todoUnit.isComplete"/>
      <p>{{ todoUnit.name }}</p>
      <p>{{ todoUnit.date | date }}</p>
    </div>`
})
export class TodoUnitComponent {
  @Input() todoUnit = {
    id: "",
    name: 'lala',
    isComplete: false,
    date: 0,
    description: '',
  }
  @Input() isShowDescription = false;
  showDescription(){
    alert(this.todoUnit.description);
  }
}

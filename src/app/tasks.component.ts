import {Component, Input} from "@angular/core";
import {TodoUnitComponent} from "./todo.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: "app-tasks",
  styleUrl: "./menu.css",
  template: `
    <div class="menu">

        <div class="la-tasks">
          @for (task of tasks; track task.id) {
            <li>
                <todo-unit [todoUnit]="task"></todo-unit>
            </li>
          }
        </div>

    </div>`,
  imports: [
    TodoUnitComponent,
    CommonModule
  ],
  standalone: true
})
export class TaskComponent {
  @Input() tasks = [{
    id: "",
    name: 'lala',
    isComplete: false,
    date: 0,
    description: '',
    showDescription: false
  }]
}

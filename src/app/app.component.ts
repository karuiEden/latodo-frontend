import { Component } from '@angular/core';
import {HeadComponent} from "./head.component";
import {TodoUnitComponent} from "./todo.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <la-header/>
    <div class="la-tasks">
      @for (task of tasks; track task.id) {
        <li>
          <todo-unit [todoUnit]="task"></todo-unit>
        </li>
      }
    </div>
 `,
  imports: [
    HeadComponent,
    TodoUnitComponent,
    RouterOutlet
  ],
  standalone: true,
})
export class AppComponent {
  tasks = [{
    id: "",
    name: 'lala',
    isComplete: false,
    date: 0,
    description: '',
    showDescription: false
  },
    {
      id: "",
      name: 'lala1',
      isComplete: false,
      date: 0,
      description: '',
      showDescription: false
    },
    {
      id: "",
      name: 'lala2',
      isComplete: false,
      date: 0,
      description: '',
      showDescription: false
    }
  ]
  trackById(index: number, task: any): string {
    return task.id;
  }
}

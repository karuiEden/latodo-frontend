import { Component } from '@angular/core';
import {HeadComponent} from "./head.component";
import {TodoUnitComponent} from "./todo.component";
import {TaskComponent} from "./tasks.component";
import {TimerComponent} from "./timer.component";

@Component({
  selector: 'app-root',
  styleUrl: "./menu.css",
  template: `
    <la-header/>
    <div class="la-work">
      <app-tasks/>
     <app-timer/>
    </div>
 `,
  imports: [
    HeadComponent,
    TodoUnitComponent,
    TaskComponent,
    TimerComponent
  ],
  standalone: true,
})
export class AppComponent {

}

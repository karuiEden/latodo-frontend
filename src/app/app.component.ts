import { Component } from '@angular/core';
import {HeadComponent} from "./head.component";
import {TodoUnitComponent} from "./todo.component";
import {RouterOutlet} from "@angular/router";
import {TaskComponent} from "./tasks.component";

@Component({
  selector: 'app-root',
  template: `
    <la-header/>
    <div class="la-work">
      <app-tasks/>
    </div>
 `,
  imports: [
    HeadComponent,
    TodoUnitComponent,
    RouterOutlet,
    TaskComponent
  ],
  standalone: true,
})
export class AppComponent {

}

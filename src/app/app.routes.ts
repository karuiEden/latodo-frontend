
import {Routes} from '@angular/router';
import {TaskComponent} from "./tasks.component";
import {AboutComponent} from "./about.component";
export const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];


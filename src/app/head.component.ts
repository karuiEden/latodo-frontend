import { Component } from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import "../head.css"
import {RouterLink} from "@angular/router";
@Component({
  selector: "la-header",
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
  ],
  styleUrl: "../head.css",
  template: `
    <header>
      <div class="la-head">
        <div class="logo"><h2>La TODO</h2></div>

        <div class="la-avatar"><img src="/avatar.svg" height="30px" width="30px" alt="avatar"></div>
      </div>
    </header>`
})
export class HeadComponent {
  avatar = "/avatar.svg";
  }

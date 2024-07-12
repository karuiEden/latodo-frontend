import {Component} from "@angular/core";
import {DatePipe} from "@angular/common";
import {interval, Observable, Subscription} from "rxjs";
import {CreateTaskComponent} from "./createTask.component";
import {TodoService, TodoUnit} from "./todo.service";

@Component({
  selector: "app-timer",
  standalone: true,
  styleUrl: "./timer.css",
  template: `
    <div class="timer">
      <p style="font-size: 8vmin; margin-top: 1.5vmin">{{ time * 1000 | date:'HH:mm:ss ':"+0000" }}</p>
      <div class="timer-btns">
      @if (!behaivor) {
        <input type="image" (click)="startTimer()" src="/play-btn.svg" alt="play">
      } @else {
        <input type="image" (click)="pauseTimer()" src="/pause-btn.svg" alt="stop">
      }
        @if (time !== 0){
          <input type="image" (click)="stopTimer()" src="/stop-btn.svg" alt="stop">
        } @else {
          <input type="hidden" (click)="stopTimer()" src="/stop-btn.svg" alt="stop">
        }
      </div>
      <create-task (NewTaskTrigger)="createTask($event)"/>
    </div>`,

  imports: [
    DatePipe,
    CreateTaskComponent
  ]
})export class TimerComponent {
  time: number = 0;
  behaivor = false;
  private subscription!: Subscription;
  startTimer(){
    this.behaivor = !this.behaivor;
    const timer = interval(1000);
    this.subscription = timer.subscribe({next: () => {this.time++}})
  }

  pauseTimer(){
    this.behaivor = !this.behaivor;
    this.subscription.unsubscribe();
  }

  stopTimer() {
    this.behaivor = false;
    this.subscription.unsubscribe();
    this.time = 0
  }

  tasks$!: Observable<TodoUnit[]>;
  constructor(private taskService: TodoService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.task$;
  }

  createTask(taskName: string): void {
    this.taskService.createTask(taskName).subscribe({next : ()=>{this.ngOnInit()} ,error: (error)=> console.log(error)});
  }
}

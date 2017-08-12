import { Component, OnInit } from '@angular/core';

import { Task } from '../task';

const taskSeed: string[] = ["Buy pants", "Get camera repaired", "File taxes"];

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let task of tasks" >{{task.text}}</div>
  `,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor() { 
    this.tasks = [];
  }

  ngOnInit() {
    for (let i in taskSeed) {
      this.tasks.push(new Task(taskSeed[i]));
    }
    console.log(this.tasks);
  }

}

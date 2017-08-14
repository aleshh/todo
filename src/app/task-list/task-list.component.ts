import { Component, OnInit } from '@angular/core';

import { Task } from '../task';

const taskSeed: string[] = ["Buy pants", "Get camera repaired", "File taxes"];

@Component({
  selector: 'task-list',
  template: `
    <div class="list-group">
      <task class="form-check list-group-item list-group-item-action"
            *ngFor="let task of tasks"
            [task]="task">
      </task>
    </div>
    <task-form class="form-check list-group-item list-group-item-action"
               (newTask)="addTask($event)">
    </task-form>
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

  addTask(task) {
    this.tasks.push(task);
  }

}

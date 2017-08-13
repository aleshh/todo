import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'task',
  template: `
        {{task.text}}
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
    console.log(this.task);
  }

}

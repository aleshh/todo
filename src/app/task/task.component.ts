import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'task',
  template: `
  <div class="">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      {{task.text}}
    </label>
  </div>

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

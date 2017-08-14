import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'task-form',
  template: `
  <div class="input-group">
    <input type="text"
           class="form-control"
           placeholder="New item"
           #newTaskField>
    <span class="input-group-button">
      <button type="button"
              class="btn btn-primary"
              (click)="addTask(newTaskField.value)">Add</button>
    </span>
  </div>
  `,
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() newTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask(text: string){
    this.newTask.emit(new Task(text));
  }

}

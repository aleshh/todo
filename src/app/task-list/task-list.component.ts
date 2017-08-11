import { Component, OnInit } from '@angular/core';

import { Task } from '../task';

const taskSeed: string[] = ["Buy pants", "Get camera repaired", "File taxes"];

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

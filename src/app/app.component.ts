import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    `<div class="container">
        <task-list>Loading...</task-list>
      </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

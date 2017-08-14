import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="navbar fixed-top navbar-inverse bg-primary">
        <div class="navbar-brand">Navbar</div>
      </div>
      <div class="container" style="padding-top: 70px">
        <task-list>Loading...</task-list>
      </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

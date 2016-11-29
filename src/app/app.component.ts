import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-table [list]="todoList" 
               (itemClick)="onItemClick($event)"></app-table>
    <h1>
      Hello! {{ opmName }} {{ title }} 
    </h1>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onItemClick(e) {
    console.log('hello from app', e);
  }

  title = 'App works!';
  opmName = 'OPM Rocks!';
  todoList = [
    {name: 'Hello'},
    {name: 'World'},
    {name: 'OPM'},
    {name: 'It works!'},
  ];
}

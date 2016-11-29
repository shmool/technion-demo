import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <p>
      table Works!
    </p>
    
    <ul>
      <li *ngFor="let item of list" (click)="onClick($event)">{{ item.name }}</li>
    </ul>
  `,
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  onClick(e) {
    console.log('hello', e);
    this.itemClick.emit({type: 'click', originalEvent: e});
  }

@Input() list;
  @Output() itemClick:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

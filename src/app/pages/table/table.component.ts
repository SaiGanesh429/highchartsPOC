import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  enableData = false;
  num = 30;
  ngOnInit(): void { }
  setFlag(value) {
    this.enableData = value;
  }

  updateValue(value) {
    value === 'plus' ? this.num++ : this.num--;
  }
}

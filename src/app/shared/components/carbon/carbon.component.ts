import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.scss']
})
export class CarbonComponent implements OnInit {

  constructor() { }
  listItems = [
    {
      content: 'item one',
      selected: true,
      id: 1
    },
    {
      content: 'item two',
      selected: false,
      id: 2
    },
    {
      content: 'item three',
      selected: false,
      id: 3
    },
    {
      content: 'item four',
      selected: false,
      id: 4
    }
  ];


  ngOnInit(): void {
  }


}

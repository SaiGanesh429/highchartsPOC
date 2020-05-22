import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.scss']
})
export class CarbonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listItems = [
    {
      content: "item one",
      selected: false
    },
    {
      content: "item two",
      selected: false,
    },
    {
      content: "item three",
      selected: false
    },
    {
      content: "item four",
      selected: false
    }
  ];

}

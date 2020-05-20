import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ibm-carbon',
  templateUrl: './ibm-carbon.component.html',
  styleUrls: ['./ibm-carbon.component.scss']
})
export class IbmCarbonComponent implements OnInit {

  constructor() { }
  listItems = [
    { content: "one", id: 0 },
    { content: "two", id: 1 },
    { content: "three", id: 2 },
    { content: "four", id: 3 }
  ];
  model;
  ngOnInit(): void {
  }
  alert() {
  }

  onClose(event) {
    console.log(event, "closed")
  }

  selected(event) {
    console.log(event, "selected")
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendoui-slider',
  templateUrl: './kendoui-slider.component.html',
  styleUrls: ['./kendoui-slider.component.scss']
})
export class KendouiSliderComponent implements OnInit {

  constructor() { }
  public valuesVertical = 7;
  public min = -10;
  public max = 10;
  public largeStep = 5;
  public smallStep = 1;

  public title = numbers => {
    return `${numbers} %`;
  };
  ngOnInit(): void {
  }

}

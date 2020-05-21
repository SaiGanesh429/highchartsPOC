import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-slider',
  templateUrl: './simple-slider.component.html',
  styleUrls: ['./simple-slider.component.scss']
})
export class SimpleSliderComponent implements OnInit {

  constructor() { }
  value = 5;
  options = {
    showTicksValues: true,
    vertical: true,
    stepsArray: [
      { value: 1, legend: '1' },
      { value: 2, legend: '2' },
      { value: 3, legend: '3' },
      { value: 4, legend: '4' },
      { value: 5, legend: '5' },
      { value: 6, legend: '6' },
      { value: 7, legend: '7' },
      { value: 8, legend: '8' },
      { value: 9, legend: '9' }
    ]
  };
  ngOnInit(): void {
  }

}

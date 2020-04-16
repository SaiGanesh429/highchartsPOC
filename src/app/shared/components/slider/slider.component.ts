import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  value;
  options;
  constructor() {
    this.options = {
      showTicks: true,
      vertical: true,
      showTicksValues: true,
      stepsArray: [
        { value: 10, legend: '10%' },
        { value: 20, legend: '5%' },
        { value: 30, legend: '0' },
        { value: 40, legend: '-5%' },
        { value: 50, legend: '-10%' },
      ]
    };
  }
  sliderControl: FormControl = new FormControl(40);



  ngOnInit(): void {
  }

  resetSlider() {
    this.sliderControl.reset(30);
  }
}

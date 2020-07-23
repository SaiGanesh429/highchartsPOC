import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent implements OnInit {

  constructor() { }
  items = ['Simple Slider', 'Simple Vertical Slider', 'Slider with Ticks', 'Custom Slider with Ticks', 'HTML5 Slider'];
  // 
  selectedItem = this.items[this.items.length - 1];

  lowValue: number = 2;
  highValue: number = 8;
  customSliderWithTickOptions = {
    floor: 0,
    ceil: 100,
    step: 1,
    showTicksValues: true,
    // vertical: true,
    stepsArray: [
      { value: 1, legend: 'Very poor' },
      { value: 2 },
      { value: 3, legend: 'Fair' },
      { value: 4 },
      { value: 5, legend: 'Average' },
      { value: 6 },
      { value: 7, legend: 'Good' },
      { value: 8 },
      { value: 9, legend: 'Excellent' }
    ]
  };


  value: number = 100;
  verticaloptions = {
    floor: 0,
    ceil: 250,
    vertical: true,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
  options = {
    floor: 0,
    ceil: 250,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 130) {
        return 'red';
      }
      if (value <= 160) {
        return 'orange';
      }
      if (value <= 190) {
        return 'yellow';
      }
      return '#2AE02A';
    }
  };
  sliderWithTickValue = 5;
  sliderWithTickOptions = {
    showTicksValues: true,
    vertical: true,
    stepsArray: [
      { value: 1, legend: 'Very poor' },
      { value: 2 },
      { value: 3, legend: 'Fair' },
      { value: 4 },
      { value: 5, legend: 'Average' },
      { value: 6 },
      { value: 7, legend: 'Good' },
      { value: 8 },
      { value: 9, legend: 'Excellent' }
    ]
  };

  ngOnInit(): void {
  }

  valueUpdated(event) {
    console.log(event)
  }

}

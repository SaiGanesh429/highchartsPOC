import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent implements OnInit {

  constructor(private elementRef: ElementRef, private ref: ChangeDetectorRef) { }
  items = ['Simple Slider', 'Simple Vertical Slider', 'Slider with Ticks', 'Custom Slider with Ticks', 'HTML5 Slider',
    'Insurance Development Slider with title',
    , 'Insurance Development Slider with selected Value',
    , 'Insurance Development Slider with tooltip', 'Insurance Development Slider', 'Insurance Development Slider with hover'];

  selectedItem = this.items[this.items.length - 1];
  @ViewChild('HtmlContent') HtmlContent;
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

  show = false;
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

  insuranceSliderTickValue = 10;
  insuranceDevelopmentSlider = {
    floor: -5,
    ceil: 20,
    showTicks: true,
    showSelectionBar: true,
    tickStep: 5,
    tickValueStep: 5,
    vertical: true,
    getLegend: (value: number): string => {
      if (value !== 15) {
        return `${value}%`;
      } else {
        return "";
      }

    },
    translate: (value: number): string => {
      return `${value}%`;
    }
  };

  insuranceDevelopmentSlidertooltip = {
    // showTicksValues: true,
    showTicksValues: true,
    tickStep: 5,
    tickValueStep: 5,
    vertical: true,
    floor: -5,
    ceil: 20,
    // ticksArray: [
    //   -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    // ],
    // stepsArray: [
    //   { value: -5, legend: '-5%' },
    //   { value: -4, },
    //   { value: -3, },
    //   { value: -2, },
    //   { value: -1, },
    //   { value: 0, legend: '0%' },
    //   { value: 1, },
    //   { value: 2, },
    //   { value: 3, },
    //   { value: 4, },
    //   { value: 5, legend: '5%' },
    //   { value: 6, },
    //   { value: 7, },
    //   { value: 8, },
    //   { value: 9, },
    //   { value: 10, legend: '10%' },
    //   { value: 11, },
    //   { value: 12, },
    //   { value: 13, },
    //   { value: 14, },
    //   { value: 15, legend: '15%' },
    //   { value: 16, },
    //   { value: 17 },
    //   { value: 18 },
    //   { value: 19 },
    //   { value: 20, legend: '20%' },
    // ]
  };

  ngOnInit(): void {
    // docum
    if (this.selectedItem === 'Insurance Development Slider with hover') {
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.ng5-slider-pointer-min').addEventListener('mouseenter', function () {
          this.elementRef.nativeElement.querySelector('.ng5-slider-model-value').style.visibility = 'visible';
        }.bind(this));

        this.elementRef.nativeElement.querySelector('.ng5-slider-pointer-min').addEventListener('mouseup', function () {
          this.elementRef.nativeElement.querySelector('.ng5-slider-model-value').style.visibility = 'visible';
        }.bind(this));

        this.elementRef.nativeElement.querySelector('.ng5-slider-pointer-min').addEventListener('mouseleave', function () {
          this.elementRef.nativeElement.querySelector('.ng5-slider-model-value').style.visibility = 'hidden';
        }.bind(this));

        this.elementRef.nativeElement.querySelector('.ng5-slider-model-value').style.visibility = 'hidden';
      }, 300);
    }


  }

  showTooltip() {

    this.show = true;
    // this.HtmlContent.show();
  }
  valueUpdated(event) {
    console.log(event)
  }

}

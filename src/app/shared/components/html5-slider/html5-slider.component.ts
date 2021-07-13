import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html5-slider',
  templateUrl: './html5-slider.component.html',
  styleUrls: ['./html5-slider.component.scss']
})
export class HTML5SliderComponent implements OnInit {

  constructor() { }
  slider;
  ngOnInit(): void {
    this.slider = document.getElementsByClassName('range-slider')[0].getElementsByTagName('input')[0].value;
  }

  outputUpdate() {
    this.slider = document.getElementsByClassName('range-slider')[0].getElementsByTagName('input')[0].value;
  }

}


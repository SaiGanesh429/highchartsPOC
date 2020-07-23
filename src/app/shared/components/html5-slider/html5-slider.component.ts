import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html5-slider',
  templateUrl: './html5-slider.component.html',
  styleUrls: ['./html5-slider.component.scss']
})
export class HTML5SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let slider = document.getElementsByClassName('range-slider');
    // slider.each(function () {
    //   value = $('.range-slider__value');
    // })
  }

}

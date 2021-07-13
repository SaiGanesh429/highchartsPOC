import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-slider',
  templateUrl: './simple-slider.component.html',
  styleUrls: ['./simple-slider.component.scss']
})
export class SimpleSliderComponent implements OnInit {


  constructor() { }
  value: number = 100;
  options = {
    floor: 0,
    ceil: 250,
    vertical: true
  };


  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { TimelineLite, TimelineMax, Back, Power1 } from 'gsap'
import { STACKCHART } from 'src/app/models/stack-chart.model';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-hover-with-gsap',
  templateUrl: './hover-with-gsap.component.html',
  styleUrls: ['./hover-with-gsap.component.scss']
})
export class HoverWithGsapComponent implements OnInit {
  // TweenMax.set(".item", { transformOrigin:"50% 50%"});

  constructor() { }
  Highcharts = Highcharts;
  stackChartOptions = STACKCHART;
  ngOnInit(): void {
    // this.setGSAPAnimation();

  }
  setGSAPAnimation(className) {
    const t: TimelineLite = new TimelineLite();
    t.set(className, {  }).to(className, 0, {
      x: 55, width: '400',
      borderRadius: 15
    });

  }
  resetAnimation(className) {
    const t: TimelineLite = new TimelineLite();
    t.set(className, {  }).to(className, 0, {
      x: 0,
      borderRadius: 0, width: '250'
    });

  }
}

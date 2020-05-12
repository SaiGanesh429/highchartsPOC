import { Component, OnInit } from '@angular/core';
import { STACKCHART } from 'src/app/models/stack-chart.model';
import { BARCHART } from 'src/app/models/bar-chart.model';
import { BUBBLECHART } from 'src/app/models/bubble-chart.model';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.scss']
})
export class HoverComponent implements OnInit {
  Highcharts = Highcharts;
  stackChartOptions = STACKCHART;
  // lineChartOptions = LINECHART;
  barChartOptions = BARCHART;
  bubbleChartOptions = BUBBLECHART;
  constructor() { }

  ngOnInit(): void {

  }

}

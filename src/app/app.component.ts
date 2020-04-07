import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LINECHART } from './constants/line-chart.model';
import { BARCHART } from './constants/bar-chart.model';
import { BUBBLECHART } from './constants/bubble-chart.model';
import { PIECHART } from './constants/pie-chart.model';
import { STACKCHART } from './constants/stack-chart.model';
import { SPLINECHART } from './constants/spline-chart.model';
import { COMBINATIONCHART } from './constants/combination-chart.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highChartsPoc';
  Highcharts = Highcharts;
  charts = ['Line Chart', 'Bar Chart', 'Bubble Chart', 'Pie Chart', 'Stack Chart', 'Spline Chart', 'Combination Chart'];
  selectedChart = this.charts[0];

  lineChartOptions = LINECHART;
  barChartOptions = BARCHART;
  bubbleChartOptions = BUBBLECHART;
  pieChartOptions = PIECHART;
  stackChartOptions = STACKCHART;
  splineChartOptions = SPLINECHART;
  combinationChartOptions = COMBINATIONCHART;
}

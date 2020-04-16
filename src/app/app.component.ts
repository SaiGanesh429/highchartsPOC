import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LINECHART } from './models/line-chart.model';
import { BARCHART } from './models/bar-chart.model';
import { BUBBLECHART } from './models/bubble-chart.model';
import { PIECHART } from './models/pie-chart.model';
import { STACKCHART } from './models/stack-chart.model';
import { SPLINECHART } from './models/spline-chart.model';
import { COMBINATIONCHART } from './models/combination-chart.model';
declare var require: any;
require('highcharts/modules/exporting')(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highChartsPoc';
  Highcharts = Highcharts;
  charts = ['Line Chart', 'Bar Chart', 'Bubble Chart', 'Pie Chart', 'Stack Chart', 'Spline Chart', 'Combination Chart','slider'];
  selectedItem = 'slider';

  lineChartOptions = LINECHART;
  barChartOptions = BARCHART;
  bubbleChartOptions = BUBBLECHART;
  pieChartOptions = PIECHART;
  stackChartOptions = STACKCHART;
  splineChartOptions = SPLINECHART;
  combinationChartOptions = COMBINATIONCHART;
}

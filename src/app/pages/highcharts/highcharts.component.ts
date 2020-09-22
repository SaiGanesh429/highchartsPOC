import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { LINECHART } from '../../models/line-chart.model';
import { BARCHART } from '../../models/bar-chart.model';
import { BUBBLECHART } from '../../models/bubble-chart.model';
import { PIECHART } from '../../models/pie-chart.model';
import { STACKCHART } from '../../models/stack-chart.model';
import { SPLINECHART } from '../../models/spline-chart.model';
import { COMBINATIONCHART } from '../../models/combination-chart.model';

import { WORLDMAPMODEL } from '../../models/world-map.model';
import { POPULATIONMAPMODEL } from '../../models/population-map.model';
import { TEMPERATUREMAPMODEL } from '../../models/world-temperature.model';
import * as Highchartmaps from 'highcharts/highmaps';
import { Router } from '@angular/router';
import Heatmap from 'highcharts/modules/heatmap.js';
import { HEATMAPMODEL } from 'src/app/models/heap-map.model';
Heatmap(Highcharts);
declare var require: any;
require('highcharts/modules/exporting')(Highcharts);
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent {
  constructor(private router: Router) { }
  title = 'highChartsPoc';
  Highcharts = Highcharts;

  Highchartmaps = Highchartmaps;
  charts = [
    'Line Chart', 'Bar Chart', 'Bubble Chart',
    'Pie Chart', 'Stack Chart', 'Spline Chart',
    'Combination Chart', 'World Map', 'Population Map',
    'Temperature Map', 'simple-slider', 'custom sliders', 'Hover', 'Hover with GSAP', 'heat Map'];
  selectedItem = 'heat Map';



  chartConstructor = 'mapChart';

  lineChartOptions = LINECHART;
  barChartOptions = BARCHART;
  bubbleChartOptions = BUBBLECHART;
  pieChartOptions = PIECHART;
  stackChartOptions = STACKCHART;
  splineChartOptions = SPLINECHART;
  combinationChartOptions = COMBINATIONCHART;
  worldMapOptions = WORLDMAPMODEL;
  populationMapOptions = POPULATIONMAPMODEL;
  temperatureMapOptions = TEMPERATUREMAPMODEL;
  heatMapOptions = HEATMAPMODEL;

  switch() {
    this.router.navigate(['./greensock']);
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';
import { GreensockAnimationComponent } from './pages/greensock-animation/greensock-animation.component';
import { SliderListComponent } from './pages/slider-list/slider-list.component';
import { AgGridComponent } from './shared/components/ag-grid/ag-grid.component';


const routes: Routes = [
  { path: '', redirectTo: '/charts', pathMatch: 'full' },
  { path: 'charts', component: HighchartsComponent },
  { path: 'greensock', component: GreensockAnimationComponent },
  { path: 'sliders', component: SliderListComponent }
  { path: 'ag-grid', component: AgGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';
import { GreensockAnimationComponent } from './pages/greensock-animation/greensock-animation.component';
import { AgGridComponent } from './shared/components/ag-grid/ag-grid.component';
import { TableComponent } from './pages/table/table.component';


const routes: Routes = [
  { path: '', redirectTo: '/greensock', pathMatch: 'full' },
  { path: 'charts', component: HighchartsComponent },
  { path: 'greensock', component: GreensockAnimationComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

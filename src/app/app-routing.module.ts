import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';
import { GreensockAnimationComponent } from './pages/greensock-animation/greensock-animation.component';
import { IbmCarbonComponent } from './pages/ibm-carbon/ibm-carbon.component';


const routes: Routes = [
  { path: '', redirectTo: '/greensock', pathMatch: 'full' },
  { path: 'charts', component: HighchartsComponent },
  { path: 'greensock', component: GreensockAnimationComponent },
  { path: 'carbonComponents', component: IbmCarbonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SliderComponent } from './shared/components/slider/slider.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';
import { GreensockAnimationComponent } from './pages/greensock-animation/greensock-animation.component';
import { HoverComponent } from './shared/components/hover/hover.component';
import { HoverWithGsapComponent } from './shared/components/hover-with-gsap/hover-with-gsap.component';
import { SimpleSliderComponent } from './shared/components/simple-slider/simple-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HighchartsComponent,
    GreensockAnimationComponent,
    HoverComponent,
    HoverWithGsapComponent,
    SimpleSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    Ng5SliderModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

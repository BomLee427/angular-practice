import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';



@NgModule({
  declarations: [
    SectionComponent, 
  ],

  exports: [
    SectionComponent, // app-module에서 사용하고 있음
  ],

  imports: [
    CommonModule,
    StopwatchModule
  ]
})
export class SectionModule { }

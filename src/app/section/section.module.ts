import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],

  exports: [
    SectionComponent, // app-module에서 사용하고 있음
    RouterModule, // 설정한 라우터모듈을 export해줘야만 앵귤러에서 설정값을 인식 가능
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StopwatchModule
  ]
})
export class SectionModule { }

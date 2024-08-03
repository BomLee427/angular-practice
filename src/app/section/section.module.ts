import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { PageToggleService } from '../share/page-toggle.service';

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
  ],
  // 모듈 수준의 Provider. 배열 안에는 Injectable한 클래스들이 들어올 수 있음
  providers: [
    PageToggleService
  ]
})
export class SectionModule { }

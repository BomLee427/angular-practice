import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

/**
 * 앵귤러 모듈 실습
 */

@NgModule({
  /**
   * 앵귤러 컴포넌트는 반드시 하나의 앵귤러 모듈에 등록된 상태여야 한다. (하나 이상은 X)
   * declaration에는 컴포넌트, 지시자, 파이프를 담을 수 있다.
   * 일종의 DI(의존성 주입) 역할.
   * 
   * 컴포넌트를 각각 어울리는 모듈에 declaration하는 것이 모듈화의 출발점.
   */
  declarations: [
    HeaderComponent, 
    FooterComponent, 
  ], // Angular CLI는 옵션을 지정하지 않으면 가장 가까운 모듈에 컴포넌트를 등록한다. (문서 참조!)

  imports: [
    CommonModule
  ],

  /**
   * ES6 module에서의 export문과 똑같다.
   * 다른 모듈이 사용할 수 있도록 한다.
   */
  exports: [
    HeaderComponent, 
    FooterComponent, 
  ]
})
export class LayoutModule { }

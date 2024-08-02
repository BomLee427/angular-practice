import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

/**
 * <앵귤러에서의 모듈>
 * 앵귤러 앱은 최소 1개 이상의 모듈을 가진다.
 * 그 중에서도 루트 모듈은 모든 모듈의 상위 모듈, 가장 처음 실행되는 기본 모듈이다.
 * 
 * JS의 모듈과 비슷하지만 거의 발전된 형태라고 보면 된다.
 * 그래서 import, export 등의 명칭을 가진 데코레이터의 프로퍼티들도 js 모듈과 비슷한 역할을 한다고 생각하면 된다.
 */

@NgModule({
  declarations: [   // 컴포넌트들을 이 곳에서 정의해 주어야 앵귤러가 인식한다.
    AppComponent, 
  ],

  /**
   * LayoutModule을 import했기 때문에 LayoutModule이 export한 component를 불러올 수 있다.
   * import * as alias from ~~와 똑같다고 보면 된다.
   * 
   * import하게 되면 의존성이 발생한다.
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule,
  ],

  /**
   * JS의 export와 같은 기능
   */
  exports: [
    AppComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 모듈은 기능을 담는 일종의 박스 같은 것. 다른 모듈이 포함될 수도 있고, 컴포넌트가 들어갈 수도 있다.

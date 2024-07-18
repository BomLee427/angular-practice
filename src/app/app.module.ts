import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [   // 컴포넌트들을 이 곳에서 정의해 주어야 앵귤러가 인식한다.
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 모듈은 기능을 담는 일종의 박스 같은 것. 다른 모듈이 포함될 수도 있고, 컴포넌트가 들어갈 수도 있다.
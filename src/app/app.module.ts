import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';

@NgModule({
  declarations: [   // 컴포넌트들을 이 곳에서 정의해 주어야 앵귤러가 인식한다.
    AppComponent, 
    HeaderComponent, FooterComponent, SectionComponent, TimeDisplayComponent, ButtonsComponent,
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

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SectionComponent } from '../section/section.component';

/**
 * 서비스를 꾸며주는 데코레이터
 */
@Injectable({
  // providedIn: 'root'
  providedIn: SectionComponent    // 서비스에 직접 Provider를 작성
})
export class PageToggleService {


  routingCount: number = 0;
  
  constructor(
    private router: Router
  ) { }

  goPage(target: string) {
    this.routingCount ++;
    this.router.navigateByUrl(target)
  }
}

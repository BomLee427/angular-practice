import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval, map } from 'rxjs';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  providers: [
    PageToggleService,
  ]
})
export class ClockComponent implements OnInit {


  timeString: string;

  // getCurrentTime(): string {
  //   console.log('getCurrentTime() called!')
  //   return moment().format('YYYY-MM-DD HH:mm:ss');
  // }

  goStopwatch() {
    this.pageToggleService.goPage('/stopwatch');
  }

  /**
   * 
   * 서비스 사용을 위해서는 의존성 주입이 필요
   * PageToggleService를 그냥 생성자 파라미터로 넘기기만 한다면 NullInjectorError가 발생한다.
   * 앵귤러 모듈 시스템이 PageToggleService를 인식할 수 있도록 알려주어야 함.
   * 
   * Injector
   * : 의존성 주입을 해주는 앵귤러 요소
   * 
   * 앵귤러 컴포넌트들은 트리 구조로 되어 있다.
   * 인젝터 역시 트리 구조로 되어 있고, 컴포넌트의 부모-자식 관계를 따라간다.
   * -> 즉, 하나의 컴포넌트는 하나의 인젝터를 가질 수 있다.
   * -> 컴포넌트는 인젝터가 하나이거나, 없을 수 있다.
   * 
   * Provider
   * : 개발자가 Injector에게 필요한 의존성을 알려주기 위해 작성한 명세
   * 
   * -> 즉 Provider가 존재해야 Injector가 생성되고,
   *    생성된 Injector가 Provider의 명세대로 의존성을 주입해 준다.
   * 
   * Provider를 작성하는 세 가지 방법
   * 1. 모듈에 작성하기
   * 2. 컴포넌트 데코레이터에 작성하기
   * 3. @Injectable 데코레이터에 직접 작성하기
   * 
   * 각 방법의 차이는?
   * 1. 모듈 레벨
   * -> Provider를 선언한 모듈, 또는 Provider를 선언한 모듈의 상위 모듈에서 declaration한 컴포넌트에서 사용 가능
   * (모듈은 부모와 자식이 있는 트리구조는 아니지만 import를 통한 포함 관계로 볼 수 있다)
   * 
   * 2. 컴포넌트 레벨
   * -> Provider를 선언한 컴포넌트와 그 자식 컴포넌트에서만 사용할 수 있음
   * -> 즉 부모 컴포넌트의 Provider가 필요한 의존성을 명시하고 있다면 그 자식 컴포넌트는 아무 Provider 없이도 Injector를 사용할 수 있다.
   * 
   * Provider 탐색의 우선순위는 다음과 같다.
   * 자기 자신의 컴포넌트
   * -> 부모 컴포넌트
   * -> 루트 컴포넌트까지 계속해서 상속관계를 타고 탐색
   * -> 루트 모듈
   * -> 하위 모듈(루트 모듈이 import한 모듈)
   * -> 마지막으로 자신이 속한 모듈까지 탐색
   * 
   * 이 과정 중 가장 먼저 만난 Provider를 통해 의존성을 주입받는다.
   * (각 Injector들은 Single tone으로 서비스들을 갖고 있음)
   * 
   * !!!중요!!!
   * 정확하게 말하면 Provider 탐색의 주체는 Injector이기 때문에, (의존성을 주입하는 주체는 Injector니까)
   * 자신이 가진 Provider가 의존성을 주입할 수 있는 대상을 찾는다고 표현하는 것이 알맞다.
   * 
   * 3. 서비스에 직접 기술
   * -> 예를 들어 providedIn 값을 'root'로 설정하면 루트 모듈에 providers 값을 넣어주는 것과 같다.
   * -> 이 쪽이 Angular에서 조금 더 권장하는 방식.
   */
  constructor(
    private router: Router,
    private pageToggleService: PageToggleService,
  ) {
    this.timeString = moment().format('YYYY-MM-DD HH:mm:ss');

    /**
     * 함수를 템플릿에 바인딩하는 것은 추천하는 방법이 아니다.
     * 예를 들어 생성자에 아래와 같이 setInterval()이 코딩되어 있다면, 함수를 바인딩하면 1초에 한번씩 계속 getCurrentTime()이 불리게 된다.
     * 템플릿에 바인딩된 요소들은 컴포넌트 내부의 변화가 있을 때마다 계속해서 불리우기 때문이다.
     * 또 자연스럽게 함수 외부 환경에 영향을 많이 받기 때문에 예측이 불가능하다.
     */    
    // setInterval(() => { }, 1000);

    /**
     * 그렇다면 실시간으로 변화하는 시간을 어떻게 구현하면 좋을까?
     * -> 여기서 등장하는 것이 rxjs!
     * 자세한 문법은 본 강의에서는 생략한다.
     * 
     * 아래 코드는 1초마다 현재 시간을 발행하고, 그 데이터를 구독해 timeStrimg에 할당한다.
     * Rxjs 강의가 아니기 때문에 그냥 subscribe()를 사용하고 있지만 pipe()에 주목!
     */

    interval(1000)
      .pipe(map(() => {
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data
      });
  }

  ngOnInit(): void {
  }

}

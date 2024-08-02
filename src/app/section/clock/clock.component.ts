import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {


  timeString: string;

  // getCurrentTime(): string {
  //   console.log('getCurrentTime() called!')
  //   return moment().format('YYYY-MM-DD HH:mm:ss');
  // }

  constructor() {
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

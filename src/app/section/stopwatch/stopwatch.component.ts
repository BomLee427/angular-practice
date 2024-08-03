import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = 'welcome';

  // 프로퍼티 초기화 안할 시 typescript 오류 발생
  // https://velog.io/@gingaminga/%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor
  commandText: string;

  // 문제: 버튼을 눌렀을 때 다른 컴포넌트에 데이터가 전달이 되어야 한다.
  // 설계 문제. 정답은 없다.

  // 변수명은 상관 없지만 헷갈리지 말라고 통상적으로 $event로 적음
  startTime($event: string) {
    this.present = $event;
  }
  

  /**
   * 라우터 서비스 이용해서 라우터 구현하기
   * 
   * -> 컴포넌트 생성자의 매개변수로 클래스 변수를 넘겨준다.
   * -> 컴포넌트에 라우팅 메서드를 구현한다.
   * 
   * 이 때 만약 라우팅 기능이 호출될 때마다 특정 동작을 수행하게 하고 싶다면?
   * 코드가 복잡해질수록 StopwatchComponent와 ClockComponent 간에 많은 양의 중복 코드가 발생할 것.
   * 이처럼 비슷한 관심사(기능)을 가진 하나의 서비스로 묶어 중복 코드를 제거하고 재사용 가능한 코드 뭉치로 만들 수 있다.
   * 또 컴포넌트 간 데이터의 중개도 가능
   */

  goClock() {
    this.router.navigateByUrl('/clock')
  }
  
  constructor(
    private router: Router,
    
  ) { 
    this.commandText = '';
  }

  ngOnInit(): void {
  }

}

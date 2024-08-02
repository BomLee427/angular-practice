import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.commandText = '';
  }

  ngOnInit(): void {
  }

}

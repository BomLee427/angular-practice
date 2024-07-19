import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present: string = 'welcome';

  // 문제: 버튼을 눌렀을 때 다른 컴포넌트에 데이터가 전달이 되어야 한다.
  // 설계 문제. 정답은 없다.


  // 변수명은 상관 없지만 헷갈리지 말라고 통상적으로 $event로 적음
  startTime($event: string) {
    this.present = $event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

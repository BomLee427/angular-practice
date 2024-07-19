import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {


  // not undefined 명시
  @Input() inputData!: string; 

  test: number = 1;

  constructor() {

    console.log(this.inputData);

    // // 1초마다 익명 콜백 함수를 실행한다.
    // setInterval(() => {

    //   this.test ++;

    // }, 1000);

  }

  ngOnInit(): void { // 컴포넌트 생명주기와 관련
  }

  // 컴포넌트에서만 쓸 수 있음
  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);
    for (let propName in changes) {

    }
  }

}

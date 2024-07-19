import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {


  @Input() inputData!: string; 

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval!: NodeJS.Timeout;

  constructor() {

    console.log(this.inputData);

    // // 1초마다 익명 콜백 함수를 실행한다.
    // setInterval(() => {

    //   this.test ++;

    // }, 1000);

  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      
      if (this.ms < 100) {
        this.ms ++;

      } else {
        this.ms = 0;

        if (this.sec < 60) {
          this.sec ++;

        } else {
          this.sec = 0;
          this.min ++;

        }
      }
    }, 10);

  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    clearInterval(this.timeInterval);
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  ngOnInit(): void { // 컴포넌트 생명주기와 관련
  }

  // 컴포넌트에서만 쓸 수 있음
  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);

    for (let propName in changes) {

      if (propName == 'inputData') {

        if (changes[propName].currentValue == 'start') {

          this.timeStart();

        } else if (changes[propName].currentValue == 'stop') {

          this.timeStop();

        } else if (changes[propName].currentValue == 'reset') {

          this.timeReset();
          
        }

      }
    }
  }

}

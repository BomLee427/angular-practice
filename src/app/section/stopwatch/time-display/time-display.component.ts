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
    // // 1초마다 익명 콜백 함수를 실행한다.
    // setInterval(() => {

    //   this.test ++;

    // }, 1000);

  }

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      
      if (this.ms >= 100) {
        this.sec ++;
        this.ms = 0;
      }
      
      this.ms ++;
        if (this.sec >= 60) {
          this.sec = 0;
          this.min ++;
      }
      // 하진짜조건문쓰는것도이렇게멍청하게쓰면어카냐..
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


  /**
   * 컴포넌트 생명주기
   * 
   * 생명주기란?
   * => 컴포넌트가 생성되고 소멸되기까지의 일련의 과정을 의미한다.
   *    컴포넌트는 생명주기의 각 단계마다 훅 메서드(ng~~)를 호출한다.
   * 
   * 훅 메서드의 종류는 아래와 같다.
   */

  /**
   * 컴포넌트가 생성되면서 Input 등으로 인해 속성 바인딩이 일어난다.
   * 그 값 변화를 감지하여 실행되는 메서드
   * 매개변수로는 SimpleChanges, 즉 변화 그 자체를 넘겨받는다.
   * 데이터 바인딩이나 변화가 일어나면 변화가 있을 때마다 여러 번 실행됨.
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');

    for (let propName in changes) {
      if (propName == 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }

  /**
   * 컴포넌트가 시작될 때 호출되는 메서드
   * 컴포넌트 최초 시작 시 단 한번만 호출된다.(생성자보다는 뒤에 불려짐)
   * 초기화 로직 등에 사용한다.
   */
  ngOnInit(): void {
    console.log('on init');
  }

  /**
   * 변화 가능성이 있을 때 감지하여 실행됨
   */
  // TODO: 내 앱은 왜 clock에 갔다오면 주기적으로 실행되지...?
  ngDoCheck(): void {
    console.log('do check');
  }

  /**
   * 먼저 부모 컴포넌트의 ngAfterContent~~ 까지 불려지고,
   * 그 다음 자식 컴포넌트의 모든 훅 메서드가 불려진 다음,
   * 마지막으로 부모 컴포넌트의 ngAfterView~~가 불려진다.
   */

  /**
   * transclude 기법: <ng-content> 태그 사이에 부모 템플릿으로부터 전달받은 내용을 삽입한다.
   * content라는 것은 이 기법으로 외부에서 전달되는 내용을 의미. 즉 자기 자신의 내용보다 먼저 그리게 된다.
   */
  ngAfterContentInit(): void {
    console.log('after content init');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  /**
   * view는 템플릿의 전체 내용을 의미
   */
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  /**
   * 컴포넌트가 소멸하기 직전 불려지는 메서드
   */
  // TODO: 난 왜 안나오지............
  ngDistroy(): void {
    console.log('distroy');
  }

}

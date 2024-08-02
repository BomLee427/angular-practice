import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {


  // property 생성
  // clickEvent라고 명명된 이벤트 리스너(이벤트 에미터)를 만들 수 있음.
  // 이벤트 에미터는 지네릭 사용이 가능하다. 지네릭으로 emit()의 매개변수 타입을 강제할 수 있음.
  @Output() clickEvent = new EventEmitter<string>();



  // 하지만 EventEmitter를 사용하는 것은 기능에 비해 굉장히 복잡한 구현방법이다.
  // 그냥 time-display가 buttons를 포함하고 있다면 구현이 매우 쉬웠을 것이다.


  // 설계 방식을 선택하는 기준: 컴포넌트의 "재사용성"에 초점을 맞추는 것이 좋다.


  constructor() { }

  executeButton(command: string) {

    // 부모 컴포넌트가 이벤트를 대기하게 함.
    // buttons의 start를 호출 -> start가 부모 엘리먼트의 clickEvent를 emit -> app-buttons의 clickEvent가 발생해서 startTime이 호출됨
    // emit()의 인자로 전달하고자 하는 데이터를 넣을 수 있음
    this.clickEvent.emit(command);
    
  }

  ngOnInit(): void {
  }

}

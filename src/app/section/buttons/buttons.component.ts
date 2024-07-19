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


  constructor() { }

  start($event: MouseEvent) {

    // 부모 컴포넌트가 이벤트를 대기하게 함.
    // buttons의 start를 호출 -> start가 부모 엘리먼트의 clickEvent를 emit -> app-buttons의 clickEvent가 발생해서 startTime이 호출됨
    // emit()의 인자로 전달하고자 하는 데이터를 넣을 수 있음
    this.clickEvent.emit('start');
    
  }

  stop($event: MouseEvent) {
    this.clickEvent.emit('stop');
  }

  reset($event: MouseEvent) {
    this.clickEvent.emit('reset');
  }

  ngOnInit(): void {
  }

}

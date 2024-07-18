import { Component } from "@angular/core";

@Component({    // Decorator(장식자). 클래스를 말 그대로 장식하는 역할. 여기서는 컴포넌트의 정보를 입력한다.
    selector: 'app-hello',  // 해당 컴포넌트가 실행될 태그의 셀렉터
    templateUrl: './hello.component.html',  // html 템플릿 파일
    styleUrls: ['./hello.component.css']    // css
})
export class HelloComponent {

}

// 장식자가 어노테이션 기반 프로그래밍과 비슷한 느낌이라고 이해하면 될까?
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {


  timeString: string;

  getCurrentTime(): string {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }

  constructor() {
    this.timeString = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  ngOnInit(): void {
  }

}

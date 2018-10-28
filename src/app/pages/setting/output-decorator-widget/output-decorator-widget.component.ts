import { Component, OnInit } from '@angular/core';
import { EnterLeaveAnimation } from 'src/app/animations/';

@Component({
  selector: 'app-output-decorator-widget',
  animations: EnterLeaveAnimation.animations,
  templateUrl: './output-decorator-widget.component.html',
  styleUrls: ['./output-decorator-widget.component.scss']
})
export class OutputDecoratorWidgetComponent implements OnInit {

  widgetTitle = 'Output decorator';
  err = false;
  handler = true;

  isHelpShowed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHelp() {
    this.isHelpShowed = !this.isHelpShowed;
  }

  toggleHandler() {
    this.handler = !this.handler;
  }

  toggleErr() {
    this.err = !this.err;
  }

  closeHelper() {
    this.isHelpShowed = false;
  }


}

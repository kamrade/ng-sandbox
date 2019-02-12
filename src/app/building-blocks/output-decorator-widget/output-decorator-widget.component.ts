import { Component } from '@angular/core';

@Component({
  selector: 'app-output-decorator-widget',
  templateUrl: './output-decorator-widget.component.html',
  styleUrls: ['./output-decorator-widget.component.scss']
})
export class OutputDecoratorWidgetComponent {

  widgetTitle = 'Output Decorator';
  err = false;
  handler = true;

  toggleHandler() {
    this.handler = !this.handler;
  }
  toggleErr() {
    this.err = !this.err;
  }

  showHelp() {
    alert('This code is in the parent component.  Collect error information and redirect to help desk...');
  }

}

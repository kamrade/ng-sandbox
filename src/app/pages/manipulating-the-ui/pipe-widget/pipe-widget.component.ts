import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-widget',
  templateUrl: './pipe-widget.component.html',
  styleUrls: ['./pipe-widget.component.scss']
})
export class PipeWidgetComponent implements OnInit {

  case = ['Title', 'AllCaps', 'AllLower'];
  caseSetting = this.case[this.index];
  index: 0;

  constructor() { }

  ngOnInit() {
  }

  changeCase() {
    if (this.index < this.case.length) {
      this.index += 1;
    } else {
      this.index = 0;
    }
    this.caseSetting = this.case[this.index];
  }

}

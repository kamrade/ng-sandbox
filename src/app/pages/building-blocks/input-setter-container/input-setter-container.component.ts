import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-setter-container',
  templateUrl: './input-setter-container.component.html',
  styleUrls: ['./input-setter-container.component.scss']
})
export class InputSetterContainerComponent implements OnInit {

  // cubicleId: string = '';

  cid: number = 0;

  set cubicleId(val) {
    let pid = parseInt(val, 10);
    this.cid =  pid ? pid : 0;
  }

  get cubicleId() {
    return this.cid.toString();
  }

  constructor() { }

  ngOnInit() {
  }

}

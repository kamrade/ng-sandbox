import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boolean-indicator',
  templateUrl: './boolean-indicator.component.html',
  styleUrls: ['./boolean-indicator.component.scss']
})
export class BooleanIndicatorComponent implements OnInit {

  @Input() value = false;

  constructor() { }

  ngOnInit() {
  }

}

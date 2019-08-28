import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-widget',
  templateUrl: './view-encapsulation-widget.component.html',
  styleUrls: ['./view-encapsulation-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationWidgetComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

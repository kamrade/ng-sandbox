import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-selector-options-descendants-widget',
  templateUrl: './selector-options-descendants-widget.component.html',
  styleUrls: ['./selector-options-descendants-widget.component.scss']
})
export class SelectorOptionsDescendantsWidgetComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.clear();
  }

}

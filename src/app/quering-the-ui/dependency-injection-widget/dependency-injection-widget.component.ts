import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dependency-injection-widget',
  templateUrl: './dependency-injection-widget.component.html',
  styleUrls: ['./dependency-injection-widget.component.scss']
})
export class DependencyInjectionWidgetComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.elementRef);
  }

  ngOnDestroy() {
    console.clear();
  }

}

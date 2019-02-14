import { Component, AfterViewInit, ContentChild, ContentChildren, ViewChildren, QueryList } from '@angular/core';

import { SodChild2Component } from '../sod-child2/sod-child2.component';
import { SodChild3Component } from '../sod-child3/sod-child3.component';
import { SodChild4Component } from '../sod-child4/sod-child4.component';

@Component({
  selector: 'app-sod-child',
  templateUrl: './sod-child.component.html',
  styleUrls: ['./sod-child.component.scss']
})
export class SodChildComponent implements AfterViewInit {

  @ViewChildren(SodChild3Component) viewChildren: QueryList<SodChild3Component>;
  @ContentChildren(SodChild3Component) contentChildren: QueryList<SodChild3Component>;
  @ContentChildren(SodChild3Component, {descendants: true}) contentChildren2: QueryList<SodChild3Component>;
  @ContentChildren(SodChild4Component, {descendants: true}) contentChildren3: QueryList<SodChild4Component>;
  @ContentChild(SodChild4Component) contentChild: SodChild4Component;

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewChildren.forEach(child => {
        child.vc = true;
      });
      this.contentChildren.forEach((child) => {
        child.cc = true;
      });
      this.contentChildren2.forEach((child) => {
        child.cc2 = true;
      });
      this.contentChildren3.forEach((child) => {
        child.cc2 = true;
      });

      if (this.contentChild) {
        this.contentChild.cc3 = true;
      }

    }, 0);
  }

}

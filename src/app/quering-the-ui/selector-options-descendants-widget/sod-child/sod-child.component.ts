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

      // all views of child3 inside this component (2)
      console.log(this.viewChildren.length);
      this.viewChildren.forEach(child => {
        child.vc = true; // Selected viaViewChildren
      });

      // all contents of child3 wrapped in this component (1)
      console.log(this.contentChildren.length);
      this.contentChildren.forEach((child) => {
        child.cc = true; // Selected via ContentChildren
      });

      // all contents of child3 (include descendants) wrapped in this component (1)
      console.log(this.contentChildren2.length);
      this.contentChildren2.forEach((child) => {
        child.cc2 = true; // Selected via ContentChildren (via descendant)
      });

      // all contents of child4 (including descendants) wrapped by this component ()
      console.log(this.contentChildren3.length);
      this.contentChildren3.forEach((child) => {
        child.cc2 = true;
      });

      // first content of child4 wrapped by this component
      if (this.contentChild) {
        this.contentChild.cc3 = true;
      }

    }, 0);
  }

}

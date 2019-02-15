import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { observerA, observerB, observerC, observerD } from './common.inc';

@Component({
  selector: 'app-rxjs-basics-widget',
  templateUrl: './rxjs-basics-widget.component.html',
  styleUrls: ['./rxjs-basics-widget.component.scss']
})
export class RxjsBasicsWidgetComponent implements OnInit {

  /**
  * An Observable execution only have one observer
  * -^-a-b-c-d|
  * ----^_a-b-c-d|
  */

  ngOnInit() {
    const observable = interval(1000).pipe(
      take(5)
    );
    const bridge = new Subject();

    bridge.subscribe(observerA);
    observable.subscribe(bridge);

    setTimeout(() => {
      bridge.subscribe(observerB)
    }, 3000);
  }

}

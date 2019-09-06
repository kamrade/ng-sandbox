import { Component, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-push-card',
  templateUrl: './push-card.component.html',
  styleUrls: ['./push-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushCardComponent implements DoCheck {

  static doCheckCounter = 0;

  @Input()
  name: string;
  checkPosition: number;

  constructor() { }

  ngDoCheck() {
    this.checkPosition = PushCardComponent.doCheckCounter;
    PushCardComponent.doCheckCounter += 1;

    console.log(`:: do check ${this.checkPosition}`);
  }

}

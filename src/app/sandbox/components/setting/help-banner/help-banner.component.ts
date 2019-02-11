import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnterLeaveAnimation } from 'src/app/animations/';

@Component({
  selector: 'app-help-banner',
  host: {
    '[style.display]': "'block'",
    '[style.overflow]': "'hidden'",
    '[@enterLeaveAnimation]': ''
  },
  animations: EnterLeaveAnimation.animations,
  templateUrl: './help-banner.component.html',
  styleUrls: ['./help-banner.component.scss']
})
export class HelpBannerComponent implements OnInit {

  @Output()
  help: EventEmitter<String> = new EventEmitter<String>();

  showHelpDeskLink = false;

  helpClicked() {
    this.help.emit('42');
  }

  constructor() { }

  ngOnInit() {
    this.showHelpDeskLink = this.help.observers.length > 0;
    this.help.subscribe(item => console.log(':: subscription', item));
  }

}

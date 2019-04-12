import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help-banner',
  templateUrl: './help-banner.component.html',
  styleUrls: ['./help-banner.component.scss']
})
export class HelpBannerComponent implements OnInit {

  showHelpDeskLink = false;
  totalHelpVotes = 0; // total votes
  @Output()
  help: EventEmitter<number> = new EventEmitter<number>(); // votes changed

  ngOnInit() {
    // Весь смысл в том, что если родительский компонент
    // не подписывается на событие,
    // то мы и не отображаем часть компонента
    this.showHelpDeskLink = this.help.observers.length > 0;
  }

  helpClicked() {
    this.totalHelpVotes++;
    this.help.emit( this.totalHelpVotes );
  }

}

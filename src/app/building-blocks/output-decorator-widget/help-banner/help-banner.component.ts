import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help-banner',
  templateUrl: './help-banner.component.html',
  styleUrls: ['./help-banner.component.scss']
})
export class HelpBannerComponent implements OnInit {

  @Output()
  help:EventEmitter<void> = new EventEmitter<void>();

  showHelpDeskLink = false;

  ngOnInit() {
    // Весь смысл в том, что если родительский компонент
    // не подписывается на событие,
    // то мы и не отображаем часть компонента
    this.showHelpDeskLink = this.help.observers.length > 0;
  }

  helpClicked() {
    this.help.emit();
  }

}

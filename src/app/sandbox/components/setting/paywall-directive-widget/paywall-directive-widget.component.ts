import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paywall-directive-widget',
  templateUrl: './paywall-directive-widget.component.html',
  styleUrls: ['./paywall-directive-widget.component.scss']
})
export class PaywallDirectiveWidgetComponent implements OnInit {

  widgetTitle = 'Paywall directive';
  linkList: { title: string, licenseLevel: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.linkList.push({
        title: 'Link #' + (i + 1),
        licenseLevel: Math.floor((Math.random() * 3) + 1)
      })
    }
  }

}

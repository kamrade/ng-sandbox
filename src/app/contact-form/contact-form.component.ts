import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  focused = false;

  // @ViewChild('firstName')
  // firstName: ElementRef;

  constructor() {
    console.log(this.firstName);
  }

  log(x) { console.log(x); }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

}

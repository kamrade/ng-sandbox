import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {

  focused = false;

  constructor() {}

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  log(x) {
    console.log(x);
  }

  test() {
    console.log(':: log variable');
  }

}

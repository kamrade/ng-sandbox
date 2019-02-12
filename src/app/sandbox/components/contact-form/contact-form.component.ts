import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { FormTitleComponent } from 'src/app/shared-components/form-title/form-title.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  titleComponent: FormTitleComponent;

  @ViewChild(FormTitleComponent)
  set appTitle(titleComponent: FormTitleComponent) {
    this.titleComponent = titleComponent;
  }

  focused = false;

  constructor() {}

  ngOnInit() {
  }

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
    console.log(':: test starts');

    let user: any = {
      firstName: 'Dan',
      lastName: 'Brown'
    }

    Object.defineProperty(user, 'fullName', {
      get: function() {
        return `${this.firstName} ${this.lastName}`;
      },
      set: function(value) {
        let split = value.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
      }
    });

    console.log(user.fullName);
    console.log(user.firstName);
    console.log(user.lastName);

    user.fullName = 'Dennis Michailov';

    console.log(':: change');
    console.log(user.fullName);
    console.log(user.firstName);
    console.log(user.lastName);

  }

}

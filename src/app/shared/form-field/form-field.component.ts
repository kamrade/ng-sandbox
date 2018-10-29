import { Component, Input, OnInit } from '@angular/core';
import { EnterLeaveAnimation } from 'src/app/animations/';

@Component({
  selector: 'app-form-field',
  animations: EnterLeaveAnimation.animations,
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})

export class FormFieldComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder = '';
  @Input() initialValue: string;
  @Input() name: string;
  @Input() inputId: string;
  @Input() message: string;
  inputValue;

  constructor() { }

  ngOnInit() {
    this.inputValue = this.initialValue;
  }

  onKeyUp() {
    if (this.inputValue === '') {
      this.message = 'This field is required';
    }
  }

  onKeyDown() {
    this.cleanMessage();
  }

  cleanMessage() {
    this.message = '';
  }

}

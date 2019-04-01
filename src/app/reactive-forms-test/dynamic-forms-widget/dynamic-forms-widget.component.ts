import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-widget',
  templateUrl: './dynamic-forms-widget.component.html',
  styleUrls: ['./dynamic-forms-widget.component.scss']
})
export class DynamicFormsWidgetComponent implements OnInit {

  employeeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit() {
    console.log('::: submit');
    console.log(this.employeeForm.value);
  }

}

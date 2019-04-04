import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-widget',
  templateUrl: './dynamic-forms-widget.component.html',
  styleUrls: ['./dynamic-forms-widget.component.scss']
})
export class DynamicFormsWidgetComponent implements OnInit {

  employeeForm: FormGroup;
  disabled = false;

  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.'
    },
    'expirienceInYears': {
      'required': 'Expirience is required.'
    },
    'proficiency': {
      'required': 'Proficiency is required.'
    }
  }

  formErrors = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'expirienceInYears': '',
    'proficiency': ''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      fullName: [
        '', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]
      ],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        expirienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });

    this.employeeForm!.get('fullName')!.valueChanges.subscribe(val => {
      console.log('::: full name changed');
      return val;
    })
  }

  onLogErrors() {
    this.logValidationErrors(this.employeeForm);
  }

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        if (abstractControl && !abstractControl.valid) {
          const messages = this.validationMessages[key];
          console.log(messages);
          for (const errorKey in abstractControl.errors) {

          }
        }
      }
    });
  }

  onLogData() {
    this.logKeyValuePairs(this.employeeForm);
  }

  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        console.log('Key:', key, 'Value = ', abstractControl!.value);
      }
    });
  }

  onSubmit(): void {
    console.log('::: submit');
    console.log(this.employeeForm.value);
  }

  onDisable() {
    this.disableAllControls(this.employeeForm);
    this.disabled = !this.disabled;
  }

  disableAllControls(group) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.disableAllControls(abstractControl);
      } else {
        if (!this.disabled) {
          abstractControl!.disable();
        } else {
          abstractControl!.enable();
        }
      }
    });
  }

  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: 'UX Tech',
      email: 'ux-tech@mail.com',
      skills: {
        skillName: 'C#',
        expirienceInYears: '5',
        proficiency: 'intermediate'
      }
    });
  }

  onPatchDataClick() {
    this.employeeForm.patchValue({
      fullName: 'Dennis',
      email: 'dennis@mail.com'
    });
  }

}

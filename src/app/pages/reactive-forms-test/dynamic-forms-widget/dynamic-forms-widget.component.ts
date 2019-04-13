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
      return val;
    });
  }

  // LOOP OVER FORM

  loopOverForm(group: FormGroup, cb) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.loopOverForm(abstractControl, cb);
      } else {
        cb(abstractControl, key);
      }
    });
  }

  // LOG ERRORS
  logValidationErrors(abstractControl, key) {
    this.formErrors[key] = '';
    if (abstractControl && !abstractControl.valid) {
      const messages = this.validationMessages[key];
      for (const errorKey in abstractControl.errors) {
        this.formErrors[key] += messages[errorKey] + ' ';
      }
    }
  }

  onLogErrors() {
    this.loopOverForm(this.employeeForm, this.logValidationErrors.bind(this));
    console.log(this.formErrors);
  }

  // LOG DATA
  logKeyValue(abstractControl, key) {
    console.log('Key:', key, 'Value = ', abstractControl!.value);
  }

  onLogData() {
    this.loopOverForm(this.employeeForm, this.logKeyValue.bind(this));
  }

  // DISABLE ALL CONTROLS
  onDisable() {
    this.loopOverForm(this.employeeForm, this.disableAllControls.bind(this));
    this.disabled = !this.disabled;
  }

  disableAllControls(abstractControl) {
    if (!this.disabled) {
      abstractControl!.disable();
    } else {
      abstractControl!.enable();
    }
  }

  // LOAD DATA TO FORM
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

  // PATCH DATA EXAMPLE

  onPatchDataClick() {
    this.employeeForm.patchValue({
      fullName: 'Dennis',
      email: 'dennis@mail.com'
    });
  }

  // JUST TEMPLATE FOR SUBMIT FORM

  onSubmit(): void {
    console.log('::: submit');
    console.log(this.employeeForm.value);
  }

}

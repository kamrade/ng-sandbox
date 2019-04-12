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

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        // Если в текущем formControl есть ошибки валидации
        if (abstractControl && !abstractControl.valid) {
          const messages = this.validationMessages[key];
          if (abstractControl.errors) {
            for (const errorKey in abstractControl.errors) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        } else {
          // Если ошибок нет, очищаем поле
          this.formErrors[key] = '';
        }

      }
    });
  }

  onLogErrors() {
    this.logValidationErrors(this.employeeForm);
    console.log(this.formErrors);
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

  onLogData() {
    this.logKeyValuePairs(this.employeeForm);
  }

  // loopOverForm(group: FormGroup, callback) {
  //   Object.keys(group.controls).forEach((key: string) => {
  //     const abstractControl = group.get(key);
  //     if (abstractControl instanceof FormGroup) {
  //       this.loopOverForm(group: FormGroup, callback);
  //     } else {
  //       callback(group);
  //     }
  //   })
  // }

  onDisable() {
    this.disableAllControls(this.employeeForm);
    this.disabled = !this.disabled;
  }

  disableAllControls(group: FormGroup): void {
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

  onSubmit(): void {
    console.log('::: submit');
    console.log(this.employeeForm.value);
  }

}

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ]
      ],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        expirienceInYears: [''],
        proficiency: ['beginner']
      })
    });

    this.employeeForm!.get('fullName')!.valueChanges.subscribe(val => {
      console.log('::: full name changed');
      return val;
    })
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

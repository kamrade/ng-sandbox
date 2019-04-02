import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms-widget',
  templateUrl: './dynamic-forms-widget.component.html',
  styleUrls: ['./dynamic-forms-widget.component.scss']
})
export class DynamicFormsWidgetComponent implements OnInit {

  employeeForm: FormGroup;

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

    this.employeeForm.valueChanges.subscribe(val => {
      console.log('::: form changed');
      return val;
    })
  }

  onSubmit(): void {
    console.log('::: submit');
    console.log(this.employeeForm.value);
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

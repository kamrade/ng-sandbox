import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared-components/modal/modal.service';

import validationMessages from './validation-messages';

@Component({
  selector: 'app-dynamic-forms-widget',
  templateUrl: './dynamic-forms-widget.component.html',
  styleUrls: ['./dynamic-forms-widget.component.scss']
})
export class DynamicFormsWidgetComponent implements OnInit {

  employeeForm: FormGroup;
  disabled = false;
  validationMessages = validationMessages;

  formErrors = {
    'fullName': '',
    'email': '',
    'skillName': '',
    'expirienceInYears': '',
    'proficiency': ''
  }

  dropdownElements = [{
    value: 'mercedes',
    title: 'Mercedes'
  }, {
    value: 'toyota',
    title: 'Toyota'
  }, {
    value: 'nissan',
    title: 'Nissan'
  }];


  constructor(private fb: FormBuilder, public modalService: ModalService) { }

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

    this.employeeForm.valueChanges.subscribe(data => {
      this.onLogErrors();
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
    if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
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
    this.modalService.open('modal-dialog-confirm');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormsWidgetComponent } from './dynamic-forms-widget.component';

import { BooleanIndicatorComponent } from '../boolean-indicator/boolean-indicator.component';

describe('DynamicFormsWidgetComponent', () => {
  let component: DynamicFormsWidgetComponent;
  let fixture: ComponentFixture<DynamicFormsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ DynamicFormsWidgetComponent, BooleanIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with controls', () => {
    expect(component.employeeForm.contains('fullName')).toBeTruthy();
    expect(component.employeeForm.contains('email')).toBeTruthy();
  });

    it('shouldmake the control fullName required', () => {
      let control = component.employeeForm.get('fullName');
      control.setValue('');
      expect(control.valid).toBeFalsy();
      control.setValue('1');
      expect(control.valid).toBeFalsy();
      control.setValue('Dennis');
      expect(control.valid).toBeTruthy();
    });

});

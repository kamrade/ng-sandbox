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
});

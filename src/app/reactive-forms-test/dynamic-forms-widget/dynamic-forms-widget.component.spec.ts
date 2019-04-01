import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsWidgetComponent } from './dynamic-forms-widget.component';

describe('DynamicFormsWidgetComponent', () => {
  let component: DynamicFormsWidgetComponent;
  let fixture: ComponentFixture<DynamicFormsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormsWidgetComponent ]
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

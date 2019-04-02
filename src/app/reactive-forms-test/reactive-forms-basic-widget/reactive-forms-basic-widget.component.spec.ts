import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsBasicWidgetComponent } from './reactive-forms-basic-widget.component';

describe('ReactiveFormsBasicWidgetComponent', () => {
  let component: ReactiveFormsBasicWidgetComponent;
  let fixture: ComponentFixture<ReactiveFormsBasicWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsBasicWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsBasicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

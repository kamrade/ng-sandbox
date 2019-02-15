import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsPageComponent } from './reactive-forms-page.component';

describe('ReactiveFormsPageComponent', () => {
  let component: ReactiveFormsPageComponent;
  let fixture: ComponentFixture<ReactiveFormsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

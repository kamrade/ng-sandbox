import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefChildComponent } from './templateref-child.component';

describe('TemplaterefChildComponent', () => {
  let component: TemplaterefChildComponent;
  let fixture: ComponentFixture<TemplaterefChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplaterefChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

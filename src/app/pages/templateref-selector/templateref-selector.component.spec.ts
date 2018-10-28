import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefSelectorComponent } from './templateref-selector.component';

describe('TemplaterefSelectorComponent', () => {
  let component: TemplaterefSelectorComponent;
  let fixture: ComponentFixture<TemplaterefSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplaterefSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

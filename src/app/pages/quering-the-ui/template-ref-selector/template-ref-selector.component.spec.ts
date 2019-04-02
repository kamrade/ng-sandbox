import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefSelectorComponent } from './template-ref-selector.component';

describe('TemplateRefSelectorComponent', () => {
  let component: TemplateRefSelectorComponent;
  let fixture: ComponentFixture<TemplateRefSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

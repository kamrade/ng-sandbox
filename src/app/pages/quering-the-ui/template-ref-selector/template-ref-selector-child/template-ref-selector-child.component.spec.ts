import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefSelectorChildComponent } from './template-ref-selector-child.component';

describe('TemplateRefSelectorChildComponent', () => {
  let component: TemplateRefSelectorChildComponent;
  let fixture: ComponentFixture<TemplateRefSelectorChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefSelectorChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefSelectorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

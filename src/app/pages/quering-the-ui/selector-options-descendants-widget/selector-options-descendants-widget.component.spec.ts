import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOptionsDescendantsWidgetComponent } from './selector-options-descendants-widget.component';

describe('SelectorOptionsDescendantsWidgetComponent', () => {
  let component: SelectorOptionsDescendantsWidgetComponent;
  let fixture: ComponentFixture<SelectorOptionsDescendantsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorOptionsDescendantsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorOptionsDescendantsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

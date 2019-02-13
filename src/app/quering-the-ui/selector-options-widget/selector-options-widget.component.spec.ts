import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOptionsWidgetComponent } from './selector-options-widget.component';

describe('SelectorOptionsWidgetComponent', () => {
  let component: SelectorOptionsWidgetComponent;
  let fixture: ComponentFixture<SelectorOptionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorOptionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorOptionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

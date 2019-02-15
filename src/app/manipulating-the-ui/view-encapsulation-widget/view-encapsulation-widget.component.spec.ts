import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationWidgetComponent } from './view-encapsulation-widget.component';

describe('ViewEncapsulationWidgetComponent', () => {
  let component: ViewEncapsulationWidgetComponent;
  let fixture: ComponentFixture<ViewEncapsulationWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

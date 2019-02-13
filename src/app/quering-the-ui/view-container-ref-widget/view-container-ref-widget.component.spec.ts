import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRefWidgetComponent } from './view-container-ref-widget.component';

describe('ViewContainerRefWidgetComponent', () => {
  let component: ViewContainerRefWidgetComponent;
  let fixture: ComponentFixture<ViewContainerRefWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContainerRefWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContainerRefWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

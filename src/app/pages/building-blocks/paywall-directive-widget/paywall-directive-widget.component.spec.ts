import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaywallDirectiveWidgetComponent } from './paywall-directive-widget.component';

describe('PaywallDirectiveWidgetComponent', () => {
  let component: PaywallDirectiveWidgetComponent;
  let fixture: ComponentFixture<PaywallDirectiveWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaywallDirectiveWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaywallDirectiveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

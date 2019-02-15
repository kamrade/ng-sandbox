import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasicsWidgetComponent } from './rxjs-basics-widget.component';

describe('RxjsBasicsWidgetComponent', () => {
  let component: RxjsBasicsWidgetComponent;
  let fixture: ComponentFixture<RxjsBasicsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBasicsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBasicsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

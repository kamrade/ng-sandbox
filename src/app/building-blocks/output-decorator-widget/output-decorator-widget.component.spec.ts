import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorWidgetComponent } from './output-decorator-widget.component';

describe('OutputDecoratorWidgetComponent', () => {
  let component: OutputDecoratorWidgetComponent;
  let fixture: ComponentFixture<OutputDecoratorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputDecoratorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDecoratorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

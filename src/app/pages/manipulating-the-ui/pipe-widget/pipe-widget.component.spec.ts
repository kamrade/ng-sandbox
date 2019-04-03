import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeWidgetComponent } from './pipe-widget.component';

describe('PipeWidgetComponent', () => {
  let component: PipeWidgetComponent;
  let fixture: ComponentFixture<PipeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

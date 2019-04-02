import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionWidgetComponent } from './dependency-injection-widget.component';

describe('DependencyInjectionWidgetComponent', () => {
  let component: DependencyInjectionWidgetComponent;
  let fixture: ComponentFixture<DependencyInjectionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyInjectionWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

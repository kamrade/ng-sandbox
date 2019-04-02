import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodChild3Component } from './sod-child3.component';

describe('SodChild3Component', () => {
  let component: SodChild3Component;
  let fixture: ComponentFixture<SodChild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodChild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

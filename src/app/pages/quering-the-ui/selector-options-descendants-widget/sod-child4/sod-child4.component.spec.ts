import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodChild4Component } from './sod-child4.component';

describe('SodChild4Component', () => {
  let component: SodChild4Component;
  let fixture: ComponentFixture<SodChild4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodChild4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodChild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

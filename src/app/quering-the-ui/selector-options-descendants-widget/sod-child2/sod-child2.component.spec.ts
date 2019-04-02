import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodChild2Component } from './sod-child2.component';

describe('SodChild2Component', () => {
  let component: SodChild2Component;
  let fixture: ComponentFixture<SodChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

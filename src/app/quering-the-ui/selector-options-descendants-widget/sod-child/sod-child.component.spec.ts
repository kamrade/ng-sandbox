import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodChildComponent } from './sod-child.component';

describe('SodChildComponent', () => {
  let component: SodChildComponent;
  let fixture: ComponentFixture<SodChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

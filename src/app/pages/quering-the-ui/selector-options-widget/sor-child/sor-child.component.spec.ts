import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorChildComponent } from './sor-child.component';

describe('SorChildComponent', () => {
  let component: SorChildComponent;
  let fixture: ComponentFixture<SorChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

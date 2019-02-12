import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetterContainerComponent } from './input-setter-container.component';

describe('InputSetterContainerComponent', () => {
  let component: InputSetterContainerComponent;
  let fixture: ComponentFixture<InputSetterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSetterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSetterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

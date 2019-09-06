import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushCardComponent } from './push-card.component';

describe('PushCardComponent', () => {
  let component: PushCardComponent;
  let fixture: ComponentFixture<PushCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategiesComponent } from './change-detection-strategies.component';

describe('ChangeDetectionStrategiesComponent', () => {
  let component: ChangeDetectionStrategiesComponent;
  let fixture: ComponentFixture<ChangeDetectionStrategiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionStrategiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

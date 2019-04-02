import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsAndTechnicsPageComponent } from './patterns-and-technics-page.component';

describe('PatternsAndTechnicsPageComponent', () => {
  let component: PatternsAndTechnicsPageComponent;
  let fixture: ComponentFixture<PatternsAndTechnicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsAndTechnicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsAndTechnicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

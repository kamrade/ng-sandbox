import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxjsPageComponent } from './learn-rxjs-page.component';

describe('LearnRxjsPageComponent', () => {
  let component: LearnRxjsPageComponent;
  let fixture: ComponentFixture<LearnRxjsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnRxjsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRxjsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

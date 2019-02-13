import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueringTheUiPageComponent } from './quering-the-ui-page.component';

describe('QueringTheUiPageComponent', () => {
  let component: QueringTheUiPageComponent;
  let fixture: ComponentFixture<QueringTheUiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueringTheUiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueringTheUiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

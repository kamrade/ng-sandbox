import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulatingTheUiPageComponent } from './manipulating-the-ui-page.component';

describe('ManipulatingTheUiPageComponent', () => {
  let component: ManipulatingTheUiPageComponent;
  let fixture: ComponentFixture<ManipulatingTheUiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulatingTheUiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulatingTheUiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

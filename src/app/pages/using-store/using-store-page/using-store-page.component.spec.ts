import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingStorePageComponent } from './using-store-page.component';

describe('UsingStorePageComponent', () => {
  let component: UsingStorePageComponent;
  let fixture: ComponentFixture<UsingStorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingStorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDecoratorsComponent } from './query-decorators.component';

describe('QueryDecoratorsComponent', () => {
  let component: QueryDecoratorsComponent;
  let fixture: ComponentFixture<QueryDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

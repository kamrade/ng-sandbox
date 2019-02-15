import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryListChildComponent } from './query-list-child.component';

describe('QueryListChildComponent', () => {
  let component: QueryListChildComponent;
  let fixture: ComponentFixture<QueryListChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryListChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

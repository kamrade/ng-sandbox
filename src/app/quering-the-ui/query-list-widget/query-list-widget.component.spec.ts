import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryListWidgetComponent } from './query-list-widget.component';

describe('QueryListWidgetComponent', () => {
  let component: QueryListWidgetComponent;
  let fixture: ComponentFixture<QueryListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBannerComponent } from './help-banner.component';

describe('HelpBannerComponent', () => {
  let component: HelpBannerComponent;
  let fixture: ComponentFixture<HelpBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise help event when upvoted', () => {

    let totalVotes = 0;
    component.help.subscribe(tv => totalVotes = tv);
    component.helpClicked();

    expect(totalVotes).not.toBeNull();
    expect(totalVotes).not.toBe(0);
    expect(totalVotes).toBe(1);
  });

});

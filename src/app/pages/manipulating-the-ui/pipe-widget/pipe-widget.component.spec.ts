import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeWidgetComponent } from './pipe-widget.component';
import { DynamicCasePipe } from 'src/app/pages/manipulating-the-ui/pipe-widget/dynamic-case.pipe';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

describe('PipeWidgetComponent', () => {
  let component: PipeWidgetComponent;
  let fixture: ComponentFixture<PipeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeWidgetComponent, DynamicCasePipe ],
      imports: [SharedComponentsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

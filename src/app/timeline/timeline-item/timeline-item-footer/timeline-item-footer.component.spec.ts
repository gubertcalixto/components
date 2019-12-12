import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemFooterComponent } from './timeline-item-footer.component';

describe('TimelineItemFooterComponent', () => {
  let component: TimelineItemFooterComponent;
  let fixture: ComponentFixture<TimelineItemFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

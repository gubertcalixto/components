import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemHeaderComponent } from './timeline-item-header.component';

describe('TimelineItemHeaderComponent', () => {
  let component: TimelineItemHeaderComponent;
  let fixture: ComponentFixture<TimelineItemHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

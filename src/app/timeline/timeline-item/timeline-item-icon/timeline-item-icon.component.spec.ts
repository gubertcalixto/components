import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemIconComponent } from './timeline-item-icon.component';

describe('TimelineItemIconComponent', () => {
  let component: TimelineItemIconComponent;
  let fixture: ComponentFixture<TimelineItemIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

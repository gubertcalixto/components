import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemBodyComponent } from './timeline-item-body.component';

describe('TimelineItemBodyComponent', () => {
  let component: TimelineItemBodyComponent;
  let fixture: ComponentFixture<TimelineItemBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

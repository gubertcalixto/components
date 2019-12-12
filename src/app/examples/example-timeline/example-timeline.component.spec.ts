import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTimelineComponent } from './example-timeline.component';

describe('ExampleTimelineComponent', () => {
  let component: ExampleTimelineComponent;
  let fixture: ComponentFixture<ExampleTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

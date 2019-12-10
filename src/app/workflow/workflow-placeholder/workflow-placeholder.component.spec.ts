import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowPlaceholderComponent } from './workflow-placeholder.component';

describe('WorkflowPlaceholderComponent', () => {
  let component: WorkflowPlaceholderComponent;
  let fixture: ComponentFixture<WorkflowPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

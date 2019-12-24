import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowViewGroupComponent } from './workflow-view-group.component';

describe('WorkflowViewGroupComponent', () => {
  let component: WorkflowViewGroupComponent;
  let fixture: ComponentFixture<WorkflowViewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowViewGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowViewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

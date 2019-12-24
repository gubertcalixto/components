import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowViewGroupItemComponent } from './workflow-view-group-item.component';

describe('WorkflowViewGroupItemComponent', () => {
  let component: WorkflowViewGroupItemComponent;
  let fixture: ComponentFixture<WorkflowViewGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowViewGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowViewGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

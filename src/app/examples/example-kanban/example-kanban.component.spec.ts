import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleKanbanComponent } from './example-kanban.component';

describe('ExampleKanbanComponent', () => {
  let component: ExampleKanbanComponent;
  let fixture: ComponentFixture<ExampleKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

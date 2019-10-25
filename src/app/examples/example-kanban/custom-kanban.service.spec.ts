import { TestBed } from '@angular/core/testing';

import { CustomKanbanService } from './custom-kanban.service';

describe('CustomKanbanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomKanbanService = TestBed.get(CustomKanbanService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CirculationService } from './circulation.service';

describe('CirculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CirculationService = TestBed.get(CirculationService);
    expect(service).toBeTruthy();
  });
});

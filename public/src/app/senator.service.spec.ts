import { TestBed, inject } from '@angular/core/testing';

import { SenatorService } from './senator.service';

describe('SenatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenatorService]
    });
  });

  it('should be created', inject([SenatorService], (service: SenatorService) => {
    expect(service).toBeTruthy();
  }));
});

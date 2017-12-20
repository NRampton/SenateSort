import { TestBed, inject } from '@angular/core/testing';

import { SenateResolverService } from './senate-resolver.service';

describe('SenateResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SenateResolverService]
    });
  });

  it('should be created', inject([SenateResolverService], (service: SenateResolverService) => {
    expect(service).toBeTruthy();
  }));
});

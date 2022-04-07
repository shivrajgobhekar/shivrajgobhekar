import { TestBed } from '@angular/core/testing';

import { EnqServiceService } from './enq-service.service';

describe('EnqServiceService', () => {
  let service: EnqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MuziekService } from './muziek.service';

describe('MuziekService', () => {
  let service: MuziekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuziekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

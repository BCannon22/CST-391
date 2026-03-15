import { TestBed } from '@angular/core/testing';

import { DrumsetsService } from './drumsets.service';

describe('DrumsetsService', () => {
  let service: DrumsetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrumsetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

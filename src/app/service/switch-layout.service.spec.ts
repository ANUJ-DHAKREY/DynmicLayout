import { TestBed } from '@angular/core/testing';

import { SwitchLayoutService } from './switch-layout.service';

describe('SwitchLayoutService', () => {
  let service: SwitchLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LicenseConfigService } from './license-config.service';

describe('LicenseConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenseConfigService = TestBed.get(LicenseConfigService);
    expect(service).toBeTruthy();
  });
});

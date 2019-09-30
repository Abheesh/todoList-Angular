import { TestBed } from '@angular/core/testing';

import { PerRegisterGuardService } from './per-register-guard.service';

describe('PerRegisterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerRegisterGuardService = TestBed.get(PerRegisterGuardService);
    expect(service).toBeTruthy();
  });
});

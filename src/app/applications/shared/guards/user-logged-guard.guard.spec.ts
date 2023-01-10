import { TestBed } from '@angular/core/testing';

import { UserLoggedGuardGuard } from './user-logged-guard.guard';

describe('UserLoggedGuardGuard', () => {
  let guard: UserLoggedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLoggedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

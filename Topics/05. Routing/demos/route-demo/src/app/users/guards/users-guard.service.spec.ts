import { TestBed, inject } from '@angular/core/testing';

import { UsersGuardService } from './users-guard.service';

describe('UsersGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersGuardService]
    });
  });

  it('should be created', inject([UsersGuardService], (service: UsersGuardService) => {
    expect(service).toBeTruthy();
  }));
});

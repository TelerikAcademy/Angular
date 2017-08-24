import { TestBed, inject } from '@angular/core/testing';

import { UsersListResolver } from './users-list-resolver.service';

describe('UsersListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersListResolver]
    });
  });

  it('should be created', inject([UsersListResolver], (service: UsersListResolver) => {
    expect(service).toBeTruthy();
  }));
});

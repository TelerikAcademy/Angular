import { TestBed, inject } from '@angular/core/testing';

import { UsersResolverService } from './users-resolver.service';

describe('UsersResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersResolverService]
    });
  });

  it('should be created', inject([UsersResolverService], (service: UsersResolverService) => {
    expect(service).toBeTruthy();
  }));
});

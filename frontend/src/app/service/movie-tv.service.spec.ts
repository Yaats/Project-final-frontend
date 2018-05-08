import { TestBed, inject } from '@angular/core/testing';

import { MovieTvService } from './movie-tv.service';

describe('MovieTvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieTvService]
    });
  });

  it('should be created', inject([MovieTvService], (service: MovieTvService) => {
    expect(service).toBeTruthy();
  }));
});

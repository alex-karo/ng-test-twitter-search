import { TestBed, inject } from '@angular/core/testing';

import { TwitterTasksService } from './twitter-tasks.service';

describe('TwitterTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterTasksService]
    });
  });

  it('should be created', inject([TwitterTasksService], (service: TwitterTasksService) => {
    expect(service).toBeTruthy();
  }));
});

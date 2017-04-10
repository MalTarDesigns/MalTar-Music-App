/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeatsService } from './beats.service';

describe('Service: Beats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeatsService]
    });
  });

  it('should ...', inject([BeatsService], (service: BeatsService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeatService } from './beat.service';

describe('Service: Beats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeatService]
    });
  });

  it('should ...', inject([BeatService], (service: BeatService) => {
    expect(service).toBeTruthy();
  }));
});

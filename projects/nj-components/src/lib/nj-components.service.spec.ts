import { TestBed } from '@angular/core/testing';

import { NjComponentsService } from './nj-components.service';

describe('NjComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NjComponentsService = TestBed.get(NjComponentsService);
    expect(service).toBeTruthy();
  });
});

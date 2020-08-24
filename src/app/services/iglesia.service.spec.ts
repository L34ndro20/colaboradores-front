import { TestBed } from '@angular/core/testing';

import { IglesiaService } from './iglesia.service';

describe('IglesiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IglesiaService = TestBed.get(IglesiaService);
    expect(service).toBeTruthy();
  });
});

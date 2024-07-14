import { TestBed } from '@angular/core/testing';

import { CardServicesService } from './card-services.service';

describe('CardServicesService', () => {
  let service: CardServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

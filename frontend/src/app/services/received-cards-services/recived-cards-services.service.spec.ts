import { TestBed } from '@angular/core/testing';

import { RecivedCardsServicesService } from './recived-cards-services.service';

describe('RecivedCardsServicesService', () => {
  let service: RecivedCardsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecivedCardsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

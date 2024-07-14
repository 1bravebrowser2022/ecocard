import { TestBed } from '@angular/core/testing';

import { SearchCardsServicesService } from './search-cards-services.service';

describe('SearchCardsServicesService', () => {
  let service: SearchCardsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCardsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

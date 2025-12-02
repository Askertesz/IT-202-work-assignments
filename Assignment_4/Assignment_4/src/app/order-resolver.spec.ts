import { TestBed } from '@angular/core/testing';

import { OrderResolver } from './order-resolver';

describe('OrderResolver', () => {
  let service: OrderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

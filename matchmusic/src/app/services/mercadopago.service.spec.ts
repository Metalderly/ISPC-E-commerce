import { TestBed } from '@angular/core/testing';

import { MercadopagoService } from './mercadopago.service';

describe('MercadopagoService', () => {
  let service: MercadopagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadopagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ObService } from './ob.service';

describe('ObService', () => {
  let service: ObService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObService, HttpClient],
      imports:[BrowserModule, HttpClientModule]
    });
    service = TestBed.inject(ObService);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
  });
});

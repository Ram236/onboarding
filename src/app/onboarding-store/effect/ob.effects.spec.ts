import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ObService } from 'src/app/onboarding/ob.service';
import { ObEffects } from './ob.effects';


describe('ObEffects', () => {
  let actions$: Observable<any>;
  let effects: ObEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ObEffects,
        HttpClient,
        ObService,
        provideMockActions(() => actions$)
      ],imports:[HttpClientModule]
    });

    effects = TestBed.inject(ObEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

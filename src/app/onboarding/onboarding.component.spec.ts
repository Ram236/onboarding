import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store'
import { OnboardingComponent } from './onboarding.component';
import { StoreModule } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ActionsSubject } from '@ngrx/store';
import { obReducer } from '../onboarding-store/reducer/ob.reducer';
describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let store: Store;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [OnboardingComponent],
        providers: [Store, FormBuilder, ActionsSubject, Router],
        imports: [StoreModule.forRoot({}), StoreModule.forFeature('obData', obReducer), RouterTestingModule]
      })
        .compileComponents();
    });

  beforeEach((store) => {
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
    //store = TestBed.inject(store);
  });

  it('should create', (Store) => {
    expect(component).toBeTruthy();
  });
});

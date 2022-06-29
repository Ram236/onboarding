import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ObEffects } from './onboarding-store/effect/ob.effects';
import { obReducer } from './onboarding-store/reducer/ob.reducer';
import { AddressComponent } from './components/address/address.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { ObSuccessComponent } from './ob-success/ob-success.component';
@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    AddressComponent,
    SecondaryFormComponent,
    ObSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers, runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('obData', obReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ObEffects])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

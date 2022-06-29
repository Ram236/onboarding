import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { ObSuccessComponent } from './ob-success/ob-success.component';
const routes: Routes = [
  {
    path: '', component: OnboardingComponent
  }, {
    path: 'primary-form', component: OnboardingComponent
  },
  {
    path: 'secondary-form', component: SecondaryFormComponent
  },
  { path: 'ob-success', component: ObSuccessComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

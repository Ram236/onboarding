import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'
import { Subscription, take } from 'rxjs';
import { obResults, obUser } from '../onboarding/ob.model';
import { obDataStateSelector, getLoaded } from '../onboarding-store/selector/ob.selectors'
import { AddressComponent } from '../components/address/address.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-secondary-form',
  templateUrl: './secondary-form.component.html',
  styleUrls: ['./secondary-form.component.scss']
})
export class SecondaryFormComponent implements OnInit, OnDestroy {
  obDataSubscription!: Subscription;
  obSecondaryForm!: FormGroup;
  addressValid: boolean = true;
  obDetail!: obUser;
  obSecondaryFormDisabled: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,
    private store: Store<obResults>) { }

  ngOnInit(): void {
    this.obSecondaryForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/\(\d{2}\)-\d{4}-\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.obDataSubscription = this.store.select(obDataStateSelector).subscribe(result => {
      if (result && result.length > 0) {
        this.obDetail = JSON.parse(JSON.stringify(result[0]));
        this.checkDisable(this.addressValid);
      }
      else {
        this.goPrevious();
      }

    });
  }
  get secondaryForm() {
    return this.obSecondaryForm.controls;
  }

  checkDisable(addressValidFlag: any) {
    this.addressValid = addressValidFlag;
    this.obSecondaryFormDisabled = (this.obSecondaryForm.valid && addressValidFlag) ? false : true;
  }

  goPrevious() {
    this.router.navigate(['/primary-form'])
  }
  submit(){
    this.router.navigate(['/ob-success']);
  }
  ngOnDestroy(): void {
    this.obDataSubscription.unsubscribe();
  }
}

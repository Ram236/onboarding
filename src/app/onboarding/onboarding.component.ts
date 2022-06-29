import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store'
import { Subscription, take } from 'rxjs';
import { obUser } from './ob.model';
import * as action from '../onboarding-store/action/ob.actions';
import { obDataStateSelector, getLoaded } from '../onboarding-store/selector/ob.selectors'
import { ActionsSubject } from '@ngrx/store';

import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit, OnDestroy {
  obDataSubscription!: Subscription;
  obResultSubscription!: Subscription;
  actionSubscription!: Subscription;

  obDetail!: obUser;
  obForm!: FormGroup;
  today = new Date();
  addressValid: boolean = false;
  constructor(private store: Store,
    private fb: FormBuilder, private as: ActionsSubject,
    private router: Router) {

  }

  ngOnInit(): void {
    this.obForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern(/^([aA-zZ]+\s)*[aA-zZ]+$/)]],
      first: ['', [Validators.required, Validators.pattern(/^([aA-zZ]+\s)*[aA-zZñÑáéíóúÁÉÍÓÚ]+$/)]],
      last: ['', [Validators.required, Validators.pattern(/^([aA-zZ]+\s)*[aA-zZñÑáéíóúÁÉÍÓÚ]+$/)]],
      dob: ['', [Validators.required, this.futureDateValidator()]],
      gender: ['', [Validators.required]],
    })


    this.obDataSubscription = this.store.select(getLoaded).pipe(take(1)).subscribe(data => {
      if (data) {
        this.fetchDataFromStore();
      } else {
        this.store.dispatch(action.loadObResults())
      }
    })
    this.actionSubscription = this.as.subscribe((action: any) => {
      if (action.type === 'LoadSuccess') {
        this.fetchDataFromStore();
      }

    })
  }

  // fetch the form controls
  get obPrimaryForm() {
    return this.obForm.controls;
  }

  //fetch data from store
  fetchDataFromStore() {
    this.obResultSubscription = this.store.select(obDataStateSelector).pipe(take(1)).subscribe(result => {
      this.obDetail = JSON.parse(JSON.stringify(result[0]));
    });
  }

  proceed() {
    this.store.dispatch(action.updateObResults({ results: this.obDetail })); //update the form value to store to persists data
    this.router.navigate(['/secondary-form']);
  }

  // custom validator - prevent future date for DOB
  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const today = new Date().getTime(); //current date/time
      if (!(control && control.value)) {
        return null;
      }
      return new Date(control.value).getTime() > today //compare field value with current 
        ? { invalidDate: 'Please do not enter future dates' }
        : null;
    }

  }
  ngOnDestroy(): void {
    this.obDataSubscription.unsubscribe();
    this.obResultSubscription.unsubscribe();
    this.actionSubscription.unsubscribe();

  }
}

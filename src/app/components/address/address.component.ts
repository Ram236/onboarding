import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { obResults, obUser } from '../../onboarding/ob.model';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input()
  obAddressData!:obUser;
  @Output()
  formValid = new EventEmitter();
  obAddressForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.obAddressForm = this.fb.group({
      streetNumber:['',[Validators.required]],
      streetName:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      postcode:['',[Validators.required]],
    })
   
  }

  sendAddressValidation(){
    this.formValid.emit(this.obAddressForm.valid);
  }
  get addressForm(){
    return this.obAddressForm.controls;
  }

}

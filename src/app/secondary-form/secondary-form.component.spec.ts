import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SecondaryFormComponent } from './secondary-form.component';
import {Router} from '@angular/router'
import {RouterTestingModule} from '@angular/router/testing'
import {StoreModule} from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
describe('SecondaryFormComponent', () => {
  let component: SecondaryFormComponent;
  let fixture: ComponentFixture<SecondaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFormComponent ],
      providers:[FormBuilder],
      imports:[StoreModule.forRoot({}), RouterTestingModule.withRoutes([]), HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

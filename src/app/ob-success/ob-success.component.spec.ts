import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObSuccessComponent } from './ob-success.component';

describe('ObSuccessComponent', () => {
  let component: ObSuccessComponent;
  let fixture: ComponentFixture<ObSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

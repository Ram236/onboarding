import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ob-success',
  templateUrl: './ob-success.component.html',
  styleUrls: ['./ob-success.component.scss']
})
export class ObSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onboarding() {
    this.router.navigate(['/primary-form']);
  }
}

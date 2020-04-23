import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFormSubmit(value: User) {
    // TODO save user in database
    this.router.navigateByUrl('');
  }
}

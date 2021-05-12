import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IJsonAPILogin, IUser } from 'src/app/shared/interfaces/user/User';
import { Route, Router } from '@angular/router';

import { AuthService } from 'src/app/auth/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  setUpLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(form: FormGroup) {

    let credentials: IUser = {
      'email': form.controls.email.value,
      'password': form.controls.password.value
    }

    let postObj: IJsonAPILogin = {
      'data': {
        'type': 'users',
        'attributes': {
          ...credentials
        }
      }
    }

    this._authService.login(postObj).subscribe(
      (res) => {
        this.router.navigate(['/directorate']);
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );

  }

}

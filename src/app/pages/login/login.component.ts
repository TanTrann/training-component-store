import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Store } from '@ngrx/store';

import { ComponentStore } from '@ngrx/component-store';
import { LoginStore } from './login.store';
import { User } from 'src/app/services/auth/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore],
})
export class LoginComponent implements OnInit {
  
 

  vm$ = this.store.select((state) => {
    return {
      loginForm: state.loginForm,
      title: state.title,
      email: state.loginForm?.get('email') as FormControl,
      password: state.loginForm?.get('password') as FormControl,
    };
  });

  constructor(private store: LoginStore) {}

  ngOnInit(): void {}

  submit() {
    this.store.loginStart();
  }
}

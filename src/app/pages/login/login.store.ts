import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { concatMap, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/services/auth/user.model';

const state = {
  loginForm: null as FormGroup | null,
  showSpinner: false,
  title: 'text',
  email: 'test@gamil.com',
  password: '1234',
};
type State = typeof state;

@Injectable()
export class LoginStore extends ComponentStore<State> {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    super(state);
    this.patchState({
      loginForm: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.minLength(6), Validators.required]],
      }),
    });
  }

  loginStart = () => {
    return this.authService
      .login(
        this.get((state) => state.email),
        this.get((state) => state.password)
      )
      .pipe(
        tapResponse(
          (data) => {
            console.log(data);
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            this.router.navigate(['/dashboard']);
          },
          (e: string) => alert('login fail')
        ) // catchError(() => EMPTY)
      );
  };
}

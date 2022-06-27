import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, concatMap, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthResponseData } from 'src/app/services/auth/AuthResponseData.model';
import { User } from 'src/app/services/auth/user.model';

const state = {
  loginForm: null as FormGroup | null,
  showSpinner: false,
  title: 'text',
};
type State = typeof state;

@Injectable()
export class LoginStore extends ComponentStore<State> {
  responsedata: any;
 

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

  // readonly setdata = this.updater(() => {
  //   return {
  //     ...state,
  //     email: state.email,
  //     password:state.password
  //   };
  // });
  get email(): string {
    return this.get((x) => x.loginForm)?.value.email;
  }
  get password(): string {
    return this.get((x) => x.loginForm)?.value.password;
  }
  loginStart = () => {
    this.authService.login(this.email, this.password).subscribe({
      next: (result: any) => {
        if (result) {
          console.log(result);
          this.responsedata = result;
          // localStorage.setItem('token', this.responsedata.token);
          localStorage.setItem('token', this.responsedata.token);
          this.router.navigate(['dashboard']);
        }
      },
      error: (err: any) => {
        alert('Incorrect email and password');
      },
    });
  };

  // email$ = this.get((state) => state.email);
  // password$ = this.get((state) => state.password);

  // login = this.effect((userData$: Observable<string>) =>
  //   userData$.pipe(
  //     switchMap((email$, password$) =>
  //       this.authService.login(this.email$, this.password$).pipe(
  //         tap({
  //           next: (data) => this.getUser(),
  //           error: (err) => alert('fail'),
  //         }),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
}

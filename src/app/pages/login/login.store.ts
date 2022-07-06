import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';

import { AuthService } from 'src/app/services/auth/auth.service';

const state = {
  loginForm: null as FormGroup | null,
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

  get email(): string {
    return this.get((x) => x.loginForm)?.value.email;
  }

  get password(): string {
    return this.get((x) => x.loginForm)?.value.password;
  }

  loginStart = () => {
    // alert(this.email), alert(this.password);
    this.authService.login(this.email, this.password).subscribe({
      next: (result: any) => {
        if (result) {
          console.log(result);
          this.responsedata = result;
          localStorage.setItem('token', this.responsedata.token);
          this.router.navigate(['dashboard']);
        }
      },
      error: () => {},
    });
    this.router.navigate(['dashboard']);
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

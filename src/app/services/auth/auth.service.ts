import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/services/auth/AuthResponseData.model';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  clearTimeout: any;
  // check login
  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      `http://localhost:3000/auth/login`,
      {
        email,
        password,
      }
    );
  }
  // check token load dashboard
  loadToken() {
    return localStorage.getItem('token');
  }

  // chuyen token ve chuoi

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.username,
      data.email,
      data.phone,
      data.birthday,
      data.token,
      expirationDate
    );
    return user;
  }
  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }
  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }
}

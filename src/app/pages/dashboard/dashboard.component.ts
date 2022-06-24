import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,

    private authService: AuthService
  ) {}
  currentUser: any;

  ngOnInit(): void {
    
    // check token khi load dashboard
    if (!this.authService.loadToken()) {
      this.router.navigate(['login']);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}

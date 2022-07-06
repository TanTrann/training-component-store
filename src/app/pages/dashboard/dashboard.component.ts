import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardStore],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private store: DashboardStore) {}
  vm$ = this.store.select((state) => {
    return {
      TASK_CONTROLS: state.TASK_CONTROLS,
      TASK_BOX_CONTENT: state.TASK_BOX_CONTENT,
      EVENT_CONTENT: state.EVENT_CONTENT,
    };
  });
  ngOnInit(): void {}
}

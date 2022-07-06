import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth/auth.service';
import { IconService } from './services/icons/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'train-protect';
  displaymenu = false;
  constructor(
    private iconService: IconService,
    private route: Router,
    public authService: AuthService
  ) {
    this.iconService.registryIcon();
  }

  //check icon input
  ngDoCheck(): void {
    if (this.route.url == '') {
      this.displaymenu = false;
    } else {
      this.displaymenu = true;
    }
  }

  ngOnInit() {}
}

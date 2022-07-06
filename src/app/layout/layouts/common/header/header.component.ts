import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { toUpperCaseFirstCharacter } from 'src/app/helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title!: string;
  icon!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const title = this.router.url;
    const newTitle = title.replace('/', '');
    this.title = toUpperCaseFirstCharacter(newTitle);
    this.icon = toUpperCaseFirstCharacter(newTitle) + 'Icon';
  }
}

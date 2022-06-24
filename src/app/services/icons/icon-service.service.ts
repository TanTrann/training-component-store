import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { ICONS } from './constants/icon';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  registryIcon() {
    ICONS.map((icon) => {
      this.iconRegistry.addSvgIconLiteral(
        icon.title,
        this.sanitizer.bypassSecurityTrustHtml(icon.icon)
      );
    });
  }
}

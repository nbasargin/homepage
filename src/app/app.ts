import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { RouterModule } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'hp-app',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  template: `
    <hp-header></hp-header>
    <router-outlet></router-outlet>
    <hp-footer></hp-footer>
  `,
  styleUrl: './app.css',
})
export class AppComponent {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
  }
}

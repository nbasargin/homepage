import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { RouterModule } from '@angular/router';

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
export class AppComponent {}

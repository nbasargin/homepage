import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hp-app',
  imports: [HeaderComponent, FooterComponent, RouterModule],
  template: `
    <hp-header></hp-header>
    <router-outlet></router-outlet>
    <hp-footer></hp-footer>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}

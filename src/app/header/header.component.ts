import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'hp-header',
  imports: [RouterLink, RouterLinkActive, MatTabsModule],
  template: `
    <nav class="navbar page-width">
      <div class="navbar-item" routerLinkActive="active">
        <span class="navbar-link" routerLink="/home">Home</span>
      </div>
      <div class="navbar-item" routerLinkActive="active">
        <span class="navbar-link" routerLink="/projects">Projects</span>
      </div>
      <div class="navbar-item" routerLinkActive="active">
        <span class="navbar-link" routerLink="/about">About</span>
      </div>
    </nav>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

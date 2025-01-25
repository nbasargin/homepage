import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTabsModule],
  template: `
    <div class="page-header">
      <nav class="navbar">
        <div class="navbar-title">
          <span class="navbar-link" routerLinkActive="active" routerLink="/highlights">Homepage</span>
        </div>
        <div class="navbar-item">
          <span class="navbar-link" routerLinkActive="active" routerLink="/highlights">Highlights</span>
        </div>
        <div class="navbar-item">
          <span class="navbar-link" routerLinkActive="active" routerLink="/projects">Projects</span>
        </div>
        <div class="navbar-item">
          <span class="navbar-link" routerLinkActive="active" routerLink="/about">About</span>
        </div>
      </nav>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

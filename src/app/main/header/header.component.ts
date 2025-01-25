import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-page-header',
  imports: [RouterLink, RouterLinkActive, MatTabsModule],
  template: `
    <div class="page-header">
      <nav class="navbar">
        <div class="navbar-title">
          <span class="navbar-link" routerLink="/highlights">Homepage</span>
        </div>
        <div class="navbar-item" routerLinkActive="active">
          <span class="navbar-link" routerLink="/highlights">Highlights</span>
        </div>
        <div class="navbar-item" routerLinkActive="active">
          <span class="navbar-link" routerLink="/projects">Projects</span>
        </div>
        <div class="navbar-item" routerLinkActive="active">
          <span class="navbar-link" routerLink="/about">About</span>
        </div>
      </nav>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}

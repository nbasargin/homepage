import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'hp-header',
  imports: [RouterLink, RouterLinkActive, MatTabsModule],
  template: `
    <nav class="grid-800">
      <div class="center-col navbar">
        <div class="navbar-item" routerLinkActive="active" routerLink="/home">
          <span class="navbar-link">Home</span>
        </div>
        <div class="navbar-item" routerLinkActive="active" routerLink="/projects">
          <span class="navbar-link">Projects</span>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './header.css',
})
export class HeaderComponent {}

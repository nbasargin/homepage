import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  template: `
    <div class="page-header">
      <nav class="navbar">
        <h1 class="navbar-title">Homepage</h1>
        <div class="navbar-item">ItemA</div>
        <div class="navbar-item">ItemB</div>
      </nav>
    </div>
  `,
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent {}

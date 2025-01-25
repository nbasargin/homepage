import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-highlight-card',
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="highlight-card">
      <img class="background" src="/assets/stable-diffusion-iceland.jpg" alt="background" />
      <div class="active-area">
        <mat-card class="card">
          <mat-card-header>
            <mat-card-title>Highlight Title</mat-card-title>
            <mat-card-subtitle>subtitle</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>description</p>
          </mat-card-content>
          <mat-card-actions> action-buttons </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styleUrl: 'highlight-card.component.css',
})
export class HighlightCardComponent {}

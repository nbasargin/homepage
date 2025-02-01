import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-highlight-card',
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card class="card">
      <mat-card-header>
        <mat-card-title>{{ title() }}</mat-card-title>
        <mat-card-subtitle>{{ subtitle() }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{ description() }}</p>
      </mat-card-content>
      <mat-card-actions> action-buttons </mat-card-actions>
    </mat-card>
  `,
  styleUrl: 'highlight-card.component.css',
})
export class HighlightCardComponent {
  title = input<string>();
  subtitle = input<string>();
  description = input<string>();
}

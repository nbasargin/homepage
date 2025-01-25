import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ title() }} </mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="/assets/stable-diffusion-iceland.jpg" />
      <mat-card-content>
        <p>description</p>
      </mat-card-content>
      <mat-card-actions> action-buttons </mat-card-actions>
    </mat-card>
  `,
  styleUrl: 'project-card.component.css',
})
export class ProjectCardComponent {
  title = input<string>();
}

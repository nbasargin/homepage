import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProjectData } from '../page-projects/projects-data';

@Component({
  selector: 'hp-project-card',
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  template: `
    @if (projectData(); as projectData) {
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ projectData.title }} </mat-card-title>
          <mat-card-subtitle>{{ projectData.subtitle }}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image [src]="projectData.imageUrl" />
        <mat-card-content>
          <p>{{ projectData.description }}</p>
        </mat-card-content>
        <mat-card-actions>
          @if (projectData.detailsLink) {
            <button mat-button [routerLink]="projectData.detailsLink">Details</button>
          }
        </mat-card-actions>
      </mat-card>
    }
  `,
  styleUrl: 'project-card.component.css',
})
export class ProjectCardComponent {
  projectData = input<ProjectData>();
}

import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProjectDescription } from '../projects/project-description';

@Component({
  selector: 'hp-project-card',
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  template: `
    @if (projectData(); as projectData) {
      <mat-card>
        <img class="project-image" mat-card-image [src]="projectData.imageUrl" />
        <mat-card-header>
          <mat-card-title>{{ projectData.title }} </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>{{ projectData.description }}</p>
        </mat-card-content>
        @if (projectData.detailsLink) {
          <mat-card-actions>
            @if (projectData.detailsLink) {
              <button mat-button [routerLink]="projectData.detailsLink">Details</button>
            }
          </mat-card-actions>
        }
      </mat-card>
    }
  `,
  styleUrl: 'project-card.component.css',
})
export class ProjectCardComponent {
  projectData = input<ProjectDescription>();
}

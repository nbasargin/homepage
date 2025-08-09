import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProjectDescription } from '../projects/project-description';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hp-project-card',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
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
        @if (projectData.detailsLink || projectData.externalLink) {
          <mat-card-actions>
            @if (projectData.detailsLink) {
              <button mat-button [routerLink]="projectData.detailsLink"><mat-icon>read_more</mat-icon>Details</button>
            }
            @if (projectData.externalLink) {
              <a mat-button="elevated" [href]="projectData.externalLink" target="_blank">
                <mat-icon>open_in_new</mat-icon>
                Link
              </a>
            }
          </mat-card-actions>
        }
      </mat-card>
    }
  `,
  styleUrl: 'project-card.css',
})
export class ProjectCardComponent {
  projectData = input<ProjectDescription>();
}

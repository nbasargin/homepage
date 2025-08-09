import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const fsarCropex25Description: ProjectDescription = {
  title: 'CROPEX 2025',
  description: 'Experimental F-SAR airborne campaign',
  imageUrl: '/assets/projects/fsar-cropex-25-preview.jpg',
  // detailsLink: '/fsar-cropex-25',
  externalLink:
    'https://www.dlr.de/en/latest/news/2025/test-flights-over-bavaria-inform-upcoming-earth-observation-space-missions',
};

@Component({
  selector: 'hp-projects-fsar-cropex25',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">F-SAR CROPEX 2025 Campaign</div>

    <p>F-SAR CROPEX 2025 Campaign description</p>
    <div class="button-row">
      <a mat-button="elevated" href="https://todo.com" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        TODO
      </a>
    </div>

    <div class="block-subtitle">Subtitle</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Details</p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class FsarCropex25Component {}

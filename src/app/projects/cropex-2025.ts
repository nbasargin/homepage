import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';
import { baseUrl } from '../../environments/environment';

export const fsarCropex25Description: ProjectDescription = {
  title: 'CROPEX 2025',
  description: 'Experimental F-SAR airborne campaign',
  imageUrl: baseUrl + 'assets/projects/cropex-2025/cropex-2025-preview.700x400.jpg',
  // detailsLink: '/cropex-2025',
  externalLink:
    'https://www.dlr.de/en/latest/news/2025/test-flights-over-bavaria-inform-upcoming-earth-observation-space-missions',
};

@Component({
  selector: 'hp-projects-fsar-cropex25',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">CROPEX 2025</div>

    <p>F-SAR CROPEX 2025 Campaign description</p>
    <div class="button-row">
      <a mat-button="elevated" href="https://todo.com" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        TODO
      </a>
    </div>

    <div class="block-subtitle">Subtitle</div>
    <p>Details</p>
  `,
  styles: '',
})
export class Cropex2025Component {}

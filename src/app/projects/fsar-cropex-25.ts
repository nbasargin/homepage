import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const fsarCropex25Description: ProjectDescription = {
  title: 'AgriROSE-L / CROPEX 2025',
  description: 'Experimental F-SAR airborne campaign',
  imageUrl: '/assets/placeholder.png',
  detailsLink: '/fsar-cropex-25',
};

@Component({
  selector: 'hp-projects-fsar-cropex25',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">AgriROSE-L / CROPEX 2025 Campaign</div>

    <p>AgriROSE-L / CROPEX 2025 Campaign description</p>
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const gediTdxDescription: ProjectDescription = {
  title: 'GEDI-TDX',
  description: 'GEDI-TDX data fusion for forest structure analysis',
  imageUrl: '/assets/projects/gedi-tdx/gedi-tdx-preview.700x400.jpg',
  //detailsLink: '/gedi-tdx',
  externalLink: 'https://gedi.umd.edu/applications/gedi-tandem-x/',
};

@Component({
  selector: 'hp-projects-gedi-tdx',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">GEDI-TDX</div>

    <p>GEDI-TDX description</p>
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
  styles: '',
})
export class GediTdxComponent {}

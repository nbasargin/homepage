import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const constrainedTDDescription: ProjectDescription = {
  title: 'Constrained Tensor Decompositions',
  description: 'Polarimetric SAR time series analysis',
  imageUrl: '/assets/projects/constrained-td-preview.png',
  detailsLink: '/constrained-td',
};

@Component({
  selector: 'hp-projects-constrained-td',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">Constrained Tensor Decompositions</div>

    <p>Constrained Tensor Decompositions description</p>
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
export class ConstrainedTDComponent {}

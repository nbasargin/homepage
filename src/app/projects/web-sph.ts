import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const webSphDescription: ProjectDescription = {
  title: 'WebSPH',
  description: "Bachelor's thesis, Interactive Simulation of Floods Using the SPH Method",
  imageUrl: '/assets/projects/web-sph-preview.jpg',
  detailsLink: '/web-sph',
};

@Component({
  selector: 'hp-projects-web-sph',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">WebSPH</div>

    <p>WebSPH description</p>
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
export class WebSphComponent {}

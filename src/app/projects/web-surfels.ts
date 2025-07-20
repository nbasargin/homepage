import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const webSurfelsDescription: ProjectDescription = {
  title: 'WebSurfels',
  description: "Master's thesis, High-Quality Point Cloud Rendering in WebGL",
  imageUrl: '/assets/projects/web-surfels-preview.jpg',
  detailsLink: '/web-surfels',
};

@Component({
  selector: 'hp-projects-web-surfels',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">WebSurfels</div>

    <p>
      Master's thesis project, rendering of point clouds in the browser, focus on high quality rendering. Smooth color
      blending is achieved with 2D surface splatting. Each point is rendered as a disc and the colors are blended
      together for adjacent discs.
    </p>
    <div class="button-row">
      <a mat-button="elevated" href="https://nbasargin.github.io/WebSurfels-Demo/" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        Demo
      </a>
      <a mat-button="elevated" href="https://github.com/nbasargin/WebSurfels" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        GitHub
      </a>
    </div>

    <div class="block-subtitle">Neuschwanstein Castle Demo</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Render a large dataset progressively by loading finer levels of detail as the user zooms in.</p>

    <div class="block-subtitle">Stanford Dragon Demo</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Load a PLY file, construct a level of detail tree in the browser, and render it.</p>

    <div class="block-subtitle">Google Street View Demo</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>
      Load Google Street View panoramas and depth data, construct a point cloud from the data. Then, crawl adjacent
      panoramas and expand the point cloud to reconstruct parts of the city. Note: the street view API has changed since
      2020, so the demo is running on the old cached version of the data.
    </p>

    <div class="block-subtitle">Sphere Demo</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Render a sphere with a variable number of points. Mainly used as performance test.</p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class WebSurfelsComponent {}

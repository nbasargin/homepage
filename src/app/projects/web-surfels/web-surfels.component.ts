import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hp-web-surfels',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">WebSurfels</div>

    <div>
      Master's thesis project, rendering of point clouds in the browser, focus on high quality rendering. Smooth color
      blending is achieved with 2D surface splatting. Each point is rendered as a disc and the colors are blended
      together for adjacent discs.
    </div>
    <div>
      <a mat-button="elevated" href="https://nbasargin.github.io/WebSurfels-Demo/" target="_blank">Demo</a>
      <a mat-button="elevated" href="https://github.com/nbasargin/WebSurfels" target="_blank">GitHub</a>
    </div>

    <div class="block-subtitle">Neuschwanstein Castle Demo</div>
    <div class="image-container">
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-rounded img-h400" alt="image" />
    </div>
    <div>Render a large dataset progressively by loading finer levels of detail as the user zooms in.</div>

    <div class="block-subtitle">Stanford Dragon Demo</div>
    <div class="image-container">
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-rounded img-h400" alt="image" />
    </div>
    <div>Load a PLY file, construct a level of detail tree in the browser, and render it.</div>

    <div class="block-subtitle">Google Street View Demo</div>
    <div class="image-container">
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-rounded img-h400" alt="image" />
    </div>
    <div>
      Load Google Street View panoramas and depth data, construct a point cloud from the data. Then, crawl adjacent
      panoramas and expand the point cloud to reconstruct parts of the city. Note: the street view API has changed since
      2020, so the demo is running on the old cached version of the data.
    </div>

    <div class="block-subtitle">Sphere Demo</div>
    <div class="image-container">
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-rounded img-h400" alt="image" />
    </div>
    <div>Render a sphere with a variable number of points. Mainly used as performance test.</div>
  `,
  host: {
    class: 'page-width',
  },
  styleUrl: 'web-surfels.component.css',
})
export class WebSurfelsComponent {}

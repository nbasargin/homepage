import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'hp-web-surfels',
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="block-title">WebSurfels</div>

    <div>Some infos about the web surfels project</div>
    <div>
      <a href="https://nbasargin.github.io/WebSurfels-Demo/"> Demo </a>
      <a href="https://github.com/nbasargin/WebSurfels"> Github </a>
    </div>

    <div class="image-container">
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-3-columns img-rounded" alt="image" />
      <img src="/assets/stable-diffusion-forest-shrooms.jpg" class="img-3-columns img-rounded" alt="image" />
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-3-columns img-rounded" alt="image" />
    </div>
    <div class="image-caption">some text here that describes the images above</div>

    <div>
      general description: Master's thesis project, rendering of point clouds in the browser, focus on high quality
      rendering. Smooth color blending is achieved with 2D surface splatting. Each point is rendered as a disc and the
      colors are blended together for adjacent discs.
    </div>

    <div>Neuschwanstein</div>
    <div>Dragon</div>
    <div>Point Cloud from Google Street View</div>
    <div>Sphere</div>
  `,
  host: {
    class: 'page-width',
  },
  styleUrl: 'web-surfels.component.css',
})
export class WebSurfelsComponent {}

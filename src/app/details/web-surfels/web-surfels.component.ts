import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ImageContainerComponent } from '../../shared/image-container/image-container.component';
import { ImageCaptionComponent } from '../../shared/image-caption/image-caption.component';

@Component({
  selector: 'app-web-surfels',
  imports: [CommonModule, MatCardModule, PageTitleComponent, ImageContainerComponent, ImageCaptionComponent],
  template: `
    <app-page-title>WebSurfels</app-page-title>

    <div>Some infos about the web surfels project</div>
    <div>
      <a href="https://nbasargin.github.io/WebSurfels-Demo/"> Demo </a>
      <a href="https://github.com/nbasargin/WebSurfels"> Github </a>
    </div>

    <app-image-container>
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-3-columns img-rounded" alt="image" />
      <img src="/assets/stable-diffusion-forest-shrooms.jpg" class="img-3-columns img-rounded" alt="image" />
      <img src="/assets/stable-diffusion-iceland.jpg" class="img-3-columns img-rounded" alt="image" />
    </app-image-container>
    <app-image-caption>some text here that describes the images above</app-image-caption>

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
  styleUrl: 'web-surfels.component.css',
})
export class WebSurfelsComponent {}

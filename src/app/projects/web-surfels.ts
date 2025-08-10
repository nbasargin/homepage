import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';
import { GalleryComponent, GalleryImage } from '../gallery/gallery';
import { baseUrl } from '../../environments/environment';

export const webSurfelsDescription: ProjectDescription = {
  title: 'WebSurfels',
  description: 'High-Quality Point Cloud Rendering in WebGL',
  imageUrl: baseUrl + 'assets/projects/web-surfels/web-surfels-preview.700x400.jpg',
  detailsLink: '/web-surfels',
};

@Component({
  selector: 'hp-projects-web-surfels',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, GalleryComponent],
  template: `
    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title">WebSurfels</div>

        <p>Master's thesis project: High-Quality Point Cloud Rendering in WebGL</p>
        <p>
          The thesis explores the use of WebGL for high-quality rendering of large point clouds at interactive frame
          rates in the browser. The focus is on the accurate reconstruction of the sampled surfaces from any camera
          position despite missing connectivity information. The renderer achieves high visual quality with the surface
          splatting technique, where colors of adjacent normal-aligned 2D splats are smoothly blended together.
        </p>

        <div class="button-row">
          <a mat-flat-button href="https://nbasargin.github.io/WebSurfels-Demo/" target="_blank">
            <mat-icon>rocket_launch</mat-icon>
            Demo
          </a>
          <a mat-flat-button href="https://github.com/nbasargin/WebSurfels" target="_blank">
            <mat-icon svgIcon="github"></mat-icon>
            Code
          </a>
        </div>

        <div class="block-subtitle mt-l">Neuschwanstein Castle Demo</div>
        <p>
          To render large datasets with millions of points, a hierarchical level-of-detail (LOD) tree is used. This
          structure is constructed from the original data in a preprocessing step using an octree and stores LOD
          representations at different resolutions.
        </p>

        <hp-gallery [images]="neuschwansteinImages"></hp-gallery>

        <p>
          The Neuschwanstein Castle dataset contains more than 30 million points. The data is streamed to the client on
          demand, reducing the loading times. Only the necessary parts of the scene are rendered in high resolution to
          improve performance. Appropriate levels-of-detail are dynamically chosen as the user zooms in and out.
        </p>

        <div class="block-subtitle mt-l mb-m">Stanford Dragon Demo</div>

        <hp-gallery [images]="dragonImages"></hp-gallery>

        <p>
          The Stanford Dragon demo showcases construction of a level-of-detail tree from a PLY file directly in the
          browser. Here, 1210, 27869, and 435545 splats are rendered for different levels-of-detail.
        </p>

        <div class="block-subtitle mt-l mb-m">Google Street View Demo</div>

        <hp-gallery [images]="streetViewImages"></hp-gallery>

        <p>
          The Google Street View demo demonstrates the integration of the renderer with an existing service. The demo
          loads the publicly available data from the Google Street View API and reconstructs local point clouds from
          panoramas. Then, the demo crawls adjacent panoramas and progressively expands the point cloud to reconstruct
          whole city districts directly in the browser.
        </p>
        <p class="warning-note">
          Note: the street view API has changed since 2020, so the demo is running on the old cached data.
        </p>

        <div class="block-subtitle mt-l mb-m">Sphere Demo</div>

        <hp-gallery [images]="sphereImages"></hp-gallery>

        <p>
          The sphere demo renders a sphere with a variable number of points, splat sizes, and color blending options.
          The demo is mainly used for performance testing and visual quality comparisons.
        </p>
      </div>
    </div>
  `,
  styles: '',
})
export class WebSurfelsComponent {
  neuschwansteinImages: Array<GalleryImage> = [
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-neuschwanstein-01.1492x1330.jpg',
      imgWidth: 1492,
      imgHeight: 1330,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-neuschwanstein-01.561x500.jpg',
      thumbAlt: 'Rendered point cloud of the Neuschwanstein Castle, view from above.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-neuschwanstein-02.1873x1330.jpg',
      imgWidth: 1873,
      imgHeight: 1330,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-neuschwanstein-02.704x500.jpg',
      thumbAlt: 'Rendered point cloud of the Neuschwanstein Castle, view the courtyard.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
  ];

  dragonImages: Array<GalleryImage> = [
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-dragon-01.1380x1165.jpg',
      imgWidth: 1380,
      imgHeight: 1165,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-dragon-01.592x500.jpg',
      thumbAlt: 'Low-resolution Stanford dragon, 1210 splats.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-dragon-02.1380x1165.jpg',
      imgWidth: 1380,
      imgHeight: 1165,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-dragon-02.592x500.jpg',
      thumbAlt: 'Medium-resolution Stanford dragon, 27869 splats.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-dragon-03.1380x1165.jpg',
      imgWidth: 1380,
      imgHeight: 1165,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-dragon-03.592x500.jpg',
      thumbAlt: 'High-resolution Stanford dragon, 435545 splats.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  streetViewImages: Array<GalleryImage> = [
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-street-view-01.2079x1330.jpg',
      imgWidth: 2079,
      imgHeight: 1330,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-street-view-01.782x500.jpg',
      thumbAlt: 'Point cloud reconstructed from Google Street View in Paris, view from above.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-street-view-02.1661x1063.jpg',
      imgWidth: 1661,
      imgHeight: 1063,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-street-view-02.781x500.jpg',
      thumbAlt: 'Point cloud reconstructed from Google Street View in Paris, view from the street.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  sphereImages: Array<GalleryImage> = [
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-sphere-01.1330x1330.jpg',
      imgWidth: 1330,
      imgHeight: 1330,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-sphere-01.500x500.jpg',
      thumbAlt: 'Rendered Sphere, small splats, no color blending.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-sphere-02.1330x1330.jpg',
      imgWidth: 1330,
      imgHeight: 1330,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-sphere-02.500x500.jpg',
      thumbAlt: 'Rendered Sphere, larger overlapping splats, no color blending.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
    {
      imgSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-sphere-03.1330x1330.jpg',
      imgWidth: 1330,
      imgHeight: 1330,
      thumbSrc: baseUrl + 'assets/projects/web-surfels/web-surfels-sphere-03.500x500.jpg',
      thumbAlt: 'Rendered Sphere, larger splats with color blending.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const webSurfelsDescription: ProjectDescription = {
  title: 'WebSurfels',
  description: 'High-Quality Point Cloud Rendering in WebGL',
  imageUrl: '/assets/projects/web-surfels-preview.jpg',
  detailsLink: '/web-surfels',
};

@Component({
  selector: 'hp-projects-web-surfels',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
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

        <div class="button-row mb-l">
          <a mat-flat-button href="https://nbasargin.github.io/WebSurfels-Demo/" target="_blank">
            <mat-icon>rocket_launch</mat-icon>
            Demo
          </a>
          <a mat-flat-button href="https://github.com/nbasargin/WebSurfels" target="_blank">
            <mat-icon svgIcon="github"></mat-icon>
            GitHub
          </a>
        </div>

        <div class="block-subtitle">Neuschwanstein Castle Demo</div>
        <p>
          To render large datasets with millions of points, a hierarchical level-of-detail (LOD) tree is used. This
          structure is constructed from the original data in a preprocessing step using an octree and stores LOD
          representations at different resolutions.
        </p>
        <div class="image-container">
          <img
            src="/assets/projects/web-surfels-neuschwanstein-01-h500.jpg"
            class="img-rounded img-h250"
            alt="Rendered Neuschwanstein Castle 1"
          />
          <img
            src="/assets/projects/web-surfels-neuschwanstein-02-h500.jpg"
            class="img-rounded img-h250"
            alt="Rendered Neuschwanstein Castle 2"
          />
        </div>
        <p>
          The Neuschwanstein Castle dataset contains more than 30 million points. The data is streamed to the client on
          demand, reducing the loading times. Only the necessary parts of the scene are rendered in high resolution to
          improve performance. Appropriate levels-of-detail are dynamically chosen as the user zooms in and out.
        </p>

        <div class="block-subtitle">Stanford Dragon Demo</div>
        <div class="image-container">
          <img
            src="/assets/projects/web-surfels-dragon-01-h500.jpg"
            class="img-rounded img-h200"
            alt="Low-resolution dragon"
          />
          <img
            src="/assets/projects/web-surfels-dragon-02-h500.jpg"
            class="img-rounded img-h200"
            alt="Medium-resolution dragon"
          />
          <img
            src="/assets/projects/web-surfels-dragon-03-h500.jpg"
            class="img-rounded img-h200"
            alt="High-resolution dragon"
          />
        </div>
        <p>
          The Stanford Dragon demo showcases construction of a level-of-detail tree from a PLY file directly in the
          browser. Here, 1210, 27869, and 435545 splats are rendered for different levels-of-detail.
        </p>

        <div class="block-subtitle">Google Street View Demo</div>
        <div class="image-container">
          <img
            src="/assets/projects/web-surfels-street-view-01-h500.jpg"
            class="img-rounded img-h200"
            alt="Rendered Street View 1"
          />
          <img
            src="/assets/projects/web-surfels-street-view-02-h500.jpg"
            class="img-rounded img-h200"
            alt="Rendered Street View 2"
          />
        </div>
        <p>
          The Google Street View demo demonstrates the integration of the renderer with an existing service. The demo
          loads the publicly available data from the Google Street View API and reconstructs local point clouds from
          panoramas. Then, the demo crawls adjacent panoramas and progressively expands the point cloud to reconstruct
          whole city districts directly in the browser.
        </p>
        <p class="warning-note">
          Note: the street view API has changed since 2020, so the demo is running on the old cached data.
        </p>

        <div class="block-subtitle">Sphere Demo</div>
        <div class="image-container">
          <img
            src="/assets/projects/web-surfels-sphere-01-h500.jpg"
            class="img-rounded img-h200"
            alt="Rendered Sphere 1"
          />
          <img
            src="/assets/projects/web-surfels-sphere-02-h500.jpg"
            class="img-rounded img-h200"
            alt="Rendered Sphere 2"
          />
          <img
            src="/assets/projects/web-surfels-sphere-03-h500.jpg"
            class="img-rounded img-h200"
            alt="Rendered Sphere 3"
          />
        </div>
        <p>
          The sphere demo renders a sphere with a variable number of points, splat sizes, and color blending options.
          The demo is mainly used for performance testing and visual quality comparisons.
        </p>
      </div>
    </div>
  `,
  styles: `
    .image-row {
      display: flex;
      flex-wrap: wrap;
    }
    .image-row-block {
      height: 40vh;
      flex-grow: 1;
    }
    .image-row-block img {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      vertical-align: bottom;
    }
  `,
})
export class WebSurfelsComponent {}

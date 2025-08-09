import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { HIGHLIGHT_PROJECTS } from '../project-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hp-page-home',
  imports: [ProjectCardComponent, MatIconModule],
  template: `
    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="profile-block">
          <div class="personal-info">
            <div class="block-title">Nikita Basargin</div>
            <p>
              Hi! I'm a PhD researcher at the German Aerospace Center (DLR) working on multidimensional data analysis
              and physics-informed machine learning. Before that, I completed my Master's degree in Computer Science at
              the Technical University of Munich (TUM) with a focus on computer graphics and machine learning. While my
              current work focuses on Python and PyTorch, I have a strong background in web development and TypeScript.
            </p>
          </div>
          <img src="/assets/about/profile-gh.jpg" alt="Profile Picture" class="avatar" />
        </div>
      </div>
    </div>

    <div class="projects-section grid-1200 pt-l pb-l">
      <div class="center-col">
        <div class="block-title centered mb-l">Selected Projects</div>
        <div class="project-list">
          @for (project of HIGHLIGHT_PROJECTS; track $index) {
            <hp-project-card [projectData]="project"></hp-project-card>
          }
        </div>
      </div>
    </div>

    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Publications</div>
        <div class="about-grid">
          <div>
            <div class="item-title">Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation</div>
            <div class="authors">Nikita Basargin, Alberto Alonso-González, Irena Hajnsek</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>CVPR Workshops</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2025</span>
            </div>
          </div>
          <div>
            <div class="item-title">
              Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series Analysis
            </div>
            <div class="authors">Nikita Basargin, Alberto Alonso-González, Irena Hajnsek</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>IEEE TGRS</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="awards-section grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Awards and Scholarships</div>
        <div class="about-grid">
          <div>
            <div class="item-title">Best Poster Award</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>IEEE GRSS IADF School</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2023</span>
            </div>
          </div>
          <div>
            <div class="item-title">Rohde & Schwarz Best-Bachelor-Award</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>TUM</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2017</span>
            </div>
          </div>
          <div>
            <div class="item-title">best.in.tum</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>TUM</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2016 - 2020</span>
            </div>
          </div>
          <div>
            <div class="item-title">Max Weber Program (MWP) Scholarship</div>
            <div class="location-date">
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2014 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Research & Development Experience</div>
        <div class="about-grid">
          <div>
            <div class="item-title">Software Engineer</div>
            <div>Web development (Angular & React), Data analytics</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>Userlane, Munich</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2019 - 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="education-section grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Education</div>
        <div class="about-grid">
          <div>
            <div class="item-title">PhD in Data Science and Remote Sensing</div>
            <div>Topic: Bio- and Geophysical Parameter Estimation from Multidimensional SAR Data</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>DLR, TUM, MUDS, Munich</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2021 - now</span>
            </div>
          </div>

          <div>
            <div class="item-title">Master of Informatics</div>
            <div>Passed with high distinction, grade: 1.0</div>
            <div>Thesis: High-Quality Point Cloud Rendering in WebGL</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>TUM, Munich</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2017 - 2020</span>
            </div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>UOW, Australia</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2018</span>
            </div>
          </div>

          <div>
            <div class="item-title">Bachelor of Informatics</div>
            <div>Passed with high distinction, grade: 1.1</div>
            <div>Thesis: Interactive simulation of floods using the SPH method</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>TUM, Munich</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2014 - 2017</span>
            </div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>NUS, Singapore</span>
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>2016</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './page-home.css',
})
export class PageHomeComponent {
  HIGHLIGHT_PROJECTS = HIGHLIGHT_PROJECTS;
}

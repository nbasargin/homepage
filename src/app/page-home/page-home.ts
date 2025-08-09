import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { HIGHLIGHT_PROJECTS } from '../project-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'hp-page-home',
  imports: [ProjectCardComponent, MatIconModule],
  template: `
    <div class="grid-800 section-vertical-padding">
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
    <div class="grid-1200 projects-section section-vertical-padding">
      <div class="center-col">
        <div class="block-title section-centered-title">Selected Projects</div>
        <div class="project-list">
          @for (project of HIGHLIGHT_PROJECTS; track $index) {
            <hp-project-card [projectData]="project"></hp-project-card>
          }
        </div>
      </div>
    </div>
    <div class="grid-800 section-vertical-padding">
      <div class="center-col">
        <div class="block-title block-margin-bottom">Publications</div>
        <div class="about-grid block-margin-bottom">
          <div>
            <div>Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation</div>
            <div>Nikita Basargin, Alberto Alonso-González, Irena Hajnsek</div>
            <div class="location-date">
              <mat-icon fontIcon="location_on"></mat-icon> CVPR Workshops
              <mat-icon fontIcon="date_range"></mat-icon> 2025
            </div>
          </div>
          <div>
            <div>Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series Analysis</div>
            <div>Nikita Basargin, Alberto Alonso-González, Irena Hajnsek</div>
            <div>IEEE TGRS, 2023</div>
          </div>
        </div>

        <div class="block-title block-margin-bottom">Scholarships and Awards</div>
        <div class="about-grid block-margin-bottom">
          <div>
            <div>Best Poster Award</div>
            <div>IEEE GRSS IADF School, 2023</div>
          </div>
          <div>
            <div>Rohde & Schwarz Best-Bachelor-Award</div>
            <div>TUM, 2017</div>
          </div>
          <div>
            <div>best.in.tum, best students of the Department of Informatics</div>
            <div>2016 - 2020</div>
          </div>
          <div>
            <div>Max Weber Program (MWP) Scholarship</div>
            <div>2014 - 2020</div>
          </div>
        </div>

        <div class="block-title block-margin-bottom">Research & Development Experience</div>
        <div class="about-grid block-margin-bottom">
          <div>
            <div>Software Engineer</div>
            <div>Userlane, Munich, 2019 - 2021</div>
            <div>Web development (Angular & React), Data analytics</div>
          </div>
        </div>

        <div class="block-title block-margin-bottom">Education</div>
        <div class="about-grid block-margin-bottom">
          <div>
            <div>PhD in Data Science and Remote Sensing</div>
            <div>DLR, TUM, MUDS, Munich, 2021 - now</div>
            <div>Topic: Bio- and Geophysical Parameter Estimation from Multidimensional SAR Data</div>
          </div>

          <div>
            <div>Master of Informatics</div>
            <div>TUM, Munich, 2017 - 2020</div>
            <div>UOW, Australia, 2018</div>
            <div>Passed with high distinction, grade: 1.0</div>
            <div>Thesis: High-Quality Point Cloud Rendering in WebGL</div>
          </div>

          <div>
            <div>Bachelor of Informatics</div>
            <div>TUM, Munich, 2014 - 2017</div>
            <div>NUS, Singapore, 2016</div>
            <div>Passed with high distinction, grade: 1.1</div>
            <div>Thesis: Interactive simulation of floods using the SPH method</div>
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

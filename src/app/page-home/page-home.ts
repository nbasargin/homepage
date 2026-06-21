import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectCardComponent } from '../project-card/project-card';
import { ListEntryComponent } from '../list-entry/list-entry';
import { HIGHLIGHT_PROJECTS } from '../project-list';
import { baseUrl } from '../../environments/environment';

@Component({
  selector: 'hp-page-home',
  imports: [MatIconModule, ProjectCardComponent, ListEntryComponent],
  template: `
    <div class="grid-wide pt-l pb-l">
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
          <img [src]="avatarUrl" alt="Profile Picture" class="avatar" />
        </div>
      </div>
    </div>

    <div class="projects-section grid-wide pt-l pb-l">
      <div class="center-col">
        <div class="block-title  mb-l">Project Highlights</div>
        <div class="project-highlight-grid">
          @for (project of HIGHLIGHT_PROJECTS; track $index) {
            <hp-project-card [projectData]="project"></hp-project-card>
          }
        </div>
      </div>
    </div>

    <div class="publication-section grid-wide pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Selected Publications</div>
        <div class="list-entry-grid">
          <hp-list-entry
            [title]="
              'Covariance Meets Context: Transformer-Based SAR Covariance Prediction Across Frequencies and Time'
            "
            [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
            [timePlaces]="[{ time: '2026', place: 'CVPR Workshops' }]"
            [paperLink]="
              'https://openaccess.thecvf.com/content/CVPR2026W/EarthVision/papers/Basargin_Covariance_Meets_Context_Transformer-Based_SAR_Covariance_Prediction_Across_Frequencies_and_CVPRW_2026_paper.pdf'
            "
            [githubLink]="'https://github.com/nbasargin/sarcoconut'"
          >
          </hp-list-entry>

          <hp-list-entry
            [title]="
              'Model-Based Tensor Decompositions for Geophysical Parameter Retrieval From Multidimensional SAR Data'
            "
            [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
            [timePlaces]="[{ time: '2026', place: 'IEEE TGRS' }]"
            [paperLink]="'https://ieeexplore.ieee.org/abstract/document/11493477'"
          >
          </hp-list-entry>

          <hp-list-entry
            [title]="'Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation'"
            [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
            [timePlaces]="[{ time: '2025', place: 'CVPR Workshops' }]"
            [paperLink]="
              'https://openaccess.thecvf.com/content/CVPR2025W/EarthVision/papers/Basargin_Explainable_Physical_PolSAR_Autoencoders_for_Soil_Moisture_Estimation_CVPRW_2025_paper.pdf'
            "
            [githubLink]="'https://github.com/nbasargin/nb2025earthvision'"
          >
          </hp-list-entry>
          <hp-list-entry
            [title]="'Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series Analysis'"
            [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
            [timePlaces]="[{ time: '2023', place: 'IEEE TGRS' }]"
            [paperLink]="'https://ieeexplore.ieee.org/document/10313300'"
          >
          </hp-list-entry>
        </div>
      </div>
    </div>

    <div class="work-section grid-wide pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Work Experience</div>
        <div class="list-entry-grid">
          <hp-list-entry
            class="wide-list-entry"
            [title]="'Software Engineer'"
            [descriptionLines]="[
              'Implemented data analytics and customer dashboard interfaces using Angular',
              'Added and extended reusable design system components using Stencil.js',
            ]"
            [timePlaces]="[{ time: '2019 - 2021', place: 'Userlane, Munich' }]"
          >
          </hp-list-entry>
        </div>
      </div>
    </div>

    <div class="education-section grid-wide pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Education</div>
        <div class="list-entry-grid">
          <hp-list-entry
            class="wide-list-entry"
            [title]="'(Ongoing) PhD in Data Science and Remote Sensing'"
            [descriptionLines]="[
              'Topic: Geophysical Parameter Estimation from Multidimensional SAR Data',
              'Focus: Fusion of Physics, Machine Learning, and Tensor Decompositions',
            ]"
            [timePlaces]="[{ time: '2021 - now', place: 'DLR, MUDS, TUM' }]"
          >
          </hp-list-entry>

          <hp-list-entry
            [title]="'Master of Informatics'"
            [descriptionLines]="['Passed with High Distinction', 'Thesis: High-Quality Point Cloud Rendering in WebGL']"
            [timePlaces]="[
              { time: '2017 - 2020', place: 'TUM, Munich' },
              { time: '2018', place: 'UOW, Wollongong' },
            ]"
          >
          </hp-list-entry>

          <hp-list-entry
            [title]="'Bachelor of Informatics'"
            [descriptionLines]="[
              'Passed with High Distinction',
              'Thesis: Interactive Simulation of Floods Using the SPH Method',
            ]"
            [timePlaces]="[
              { time: '2014 - 2017', place: 'TUM, Munich' },
              { time: '2016', place: 'NUS, Singapore' },
            ]"
          >
          </hp-list-entry>
        </div>
      </div>
    </div>

    <div class="awards-section grid-wide pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Awards and Scholarships</div>
        <div class="list-entry-grid">
          <hp-list-entry
            [title]="'Best Poster Award by ESA'"
            [timePlaces]="[{ time: '2023', place: 'IEEE GRSS IADF School, Benevento' }]"
          >
          </hp-list-entry>
          <hp-list-entry
            [title]="'Rohde & Schwarz Best-Bachelor-Award'"
            [timePlaces]="[{ time: '2017', place: 'TUM, Munich' }]"
          >
          </hp-list-entry>
          <hp-list-entry [title]="'best.in.tum'" [timePlaces]="[{ time: '2016 - 2020', place: 'TUM, Munich' }]">
          </hp-list-entry>
          <hp-list-entry [title]="'Max Weber Program Scholarship'" [timePlaces]="[{ time: '2014 - 2020', place: '' }]">
          </hp-list-entry>
        </div>
      </div>
    </div>
  `,
  styleUrl: './page-home.css',
})
export class PageHomeComponent {
  HIGHLIGHT_PROJECTS = HIGHLIGHT_PROJECTS;
  avatarUrl = baseUrl + 'assets/about/profile-gh.jpg';
}

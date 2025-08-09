import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectCardComponent } from '../project-card/project-card';
import { ListEntryComponent } from '../list-entry/list-entry';
import { HIGHLIGHT_PROJECTS } from '../project-list';

@Component({
  selector: 'hp-page-home',
  imports: [MatIconModule, ProjectCardComponent, ListEntryComponent],
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
        <div class="block-title centered mb-l">Project Highlights</div>
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
          <hp-list-entry
            [title]="'Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation'"
            [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
            [place]="'CVPR Workshops'"
            [time]="'2025'"
            [paperLink]="
              'https://openaccess.thecvf.com/content/CVPR2025W/EarthVision/papers/Basargin_Explainable_Physical_PolSAR_Autoencoders_for_Soil_Moisture_Estimation_CVPRW_2025_paper.pdf'
            "
            [githubLink]="'https://github.com/nbasargin/nb2025earthvision'"
          >
          </hp-list-entry>
          <hp-list-entry
            [title]="'Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series Analysis'"
            [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
            [place]="'IEEE TGRS'"
            [time]="'2023'"
            [paperLink]="'https://ieeexplore.ieee.org/document/10313300'"
          >
          </hp-list-entry>
        </div>
      </div>
    </div>

    <div class="awards-section grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Awards and Scholarships</div>
        <div class="about-grid">
          <hp-list-entry [title]="'Best Poster Award'" [place]="'IEEE GRSS IADF School'" [time]="'2023'">
          </hp-list-entry>
          <hp-list-entry [title]="'Rohde & Schwarz Best-Bachelor-Award'" [place]="'TUM'" [time]="'2017'">
          </hp-list-entry>
          <hp-list-entry [title]="'best.in.tum'" [place]="'TUM'" [time]="'2016 - 2020'"> </hp-list-entry>
          <hp-list-entry [title]="'Max Weber Program (MWP) Scholarship'" [time]="'2014 - 2020'"> </hp-list-entry>
        </div>
      </div>
    </div>

    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Research & Development Experience</div>
        <div class="about-grid">
          <hp-list-entry
            [title]="'Software Engineer'"
            [descriptionLines]="['Web development (Angular & React), Data analytics']"
            [place]="'Userlane, Munich'"
            [time]="'2019 - 2021'"
          >
          </hp-list-entry>
        </div>
      </div>
    </div>

    <div class="education-section grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-m">Education</div>
        <div class="about-grid">
          <hp-list-entry
            [title]="'PhD in Data Science and Remote Sensing'"
            [descriptionLines]="['Topic: Bio- and Geophysical Parameter Estimation from Multidimensional SAR Data']"
            [place]="'DLR, TUM, MUDS, Munich'"
            [time]="'2021 - now'"
          >
          </hp-list-entry>

          <hp-list-entry
            [title]="'Master of Informatics'"
            [descriptionLines]="[
              'Passed with high distinction, grade: 1.0',
              'Thesis: High-Quality Point Cloud Rendering in WebGL',
            ]"
            [place]="'TUM, Munich'"
            [time]="'2017 - 2020'"
            [place2]="'UOW, Australia'"
            [time2]="'2018'"
          >
          </hp-list-entry>

          <hp-list-entry
            [title]="'Bachelor of Informatics'"
            [descriptionLines]="[
              'Passed with high distinction, grade: 1.1',
              'Thesis: Interactive simulation of floods using the SPH method',
            ]"
            [place]="'TUM, Munich'"
            [time]="'2014 - 2017'"
            [place2]="'NUS, Singapore'"
            [time2]="'2016'"
          >
          </hp-list-entry>
        </div>
      </div>
    </div>
  `,
  styleUrl: './page-home.css',
})
export class PageHomeComponent {
  HIGHLIGHT_PROJECTS = HIGHLIGHT_PROJECTS;
}

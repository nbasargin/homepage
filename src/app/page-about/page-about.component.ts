import { Component } from '@angular/core';

@Component({
  selector: 'hp-page-about',
  template: `
    <div class="block-title">Nikita Basargin</div>
    <div class="about-grid">
      <img src="/assets/about/profile-gh.jpg" alt="Profile Picture" class="profile-picture" />
      <div class="personal-info">
        Hi! I'm a PhD researcher at the German Aerospace Center (DLR) working on multidimensional data analysis and
        physics-informed machine learning. Before that, I completed my Master's degree in Computer Science at the
        Technical University of Munich (TUM) with a focus on computer graphics and machine learning. While my current
        work focuses on Python and PyTorch, I have a strong background in web development and TypeScript.
      </div>
    </div>
    <div class="block-subtitle">Publications</div>

    <div class="about-grid">
      <div>
        <div>CVPR Workshops</div>
        <div>2025</div>
      </div>
      <div>
        <div>Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation</div>
        <div>Nikita Basargin, Alberto Alonso-González, Irena Hajnsek</div>
      </div>
      <div>
        <div>IEEE TGRS</div>
        <div>2023</div>
      </div>
      <div>
        <div>Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series Analysis</div>
        <div>Nikita Basargin, Alberto Alonso-González, Irena Hajnsek</div>
      </div>
    </div>

    <div class="block-subtitle">Research & Development Experience</div>
    <div class="about-grid">
      <div>
        <div>Userlane, Munich</div>
        <div>2019-02 - 2021-08</div>
      </div>
      <div>
        <div>Software Engineer</div>
        <div>Web development (Angular & React), Data analytics</div>
      </div>
    </div>

    <div class="block-subtitle">Scholarships and Awards</div>
    <div class="about-grid">
      <div>2023-09</div>
      <div>Best Poster Award, IEEE GRSS IADF School</div>
      <div>2017-12</div>
      <div>Best-Bachelor-Award by Rohde & Schwarz</div>
      <div>2016-10 - 2020-07</div>
      <div>best.in.tum, best students of the Department of Informatics</div>
      <div>2014-10 - 2020-07</div>
      <div>Max Weber Program (MWP), awarded for academic achievements</div>
    </div>

    <div class="block-subtitle">Education</div>
    <div class="about-grid">
      <div>
        <div>DLR, TUM, MUDS, Munich</div>
        <div>2021-09 - now</div>
      </div>
      <div>
        <div>PhD in Data Science and Remote Sensing</div>
        <div>Topic: Multidimensional SAR Data Processing for Bio- and Geophysical Parameter Estimation</div>
      </div>

      <div>
        <div>TUM, Munich</div>
        <div>2017-10 - 2020-07</div>
      </div>
      <div>
        <div>Master of Informatics</div>
        <div>Thesis: High-Quality Point Cloud Rendering in WebGL, grade: 1.0</div>
      </div>

      <div>
        <div>UOW, Australia</div>
        <div>2018-06 - 2018-12</div>
      </div>
      <div>
        <div>University of Wollongong (UOW), exchange semester</div>
      </div>

      <div>
        <div>TUM, Munich</div>
        <div>2014-10 - 2017-10</div>
      </div>
      <div>
        <div>Bachelor of Informatics</div>
        <div>Thesis: Interactive simulation of floods using the SPH method, grade: 1.1</div>
      </div>

      <div>
        <div>NUS, Singapore</div>
        <div>2016-08 - 2016-12</div>
      </div>
      <div>
        <div>National University of Singapore (NUS), exchange semester</div>
      </div>
      <div>
        <div>TUM, Munich</div>
        <div>2012-10 - 2014-09</div>
      </div>
      <div>
        <div>Frühstudium (Early Study) Informatics</div>
      </div>

      <div>
        <div>MTG, Munich</div>
        <div>until 2014-06</div>
      </div>
      <div>
        <div>Maria-Theresia-Gymnasium MTG, Munich</div>
        <div>Abitur, grade: 1.1</div>
      </div>
    </div>

    <div class="block-subtitle">Public Service</div>
    TODO

    <div class="block-subtitle">Skills and Interests</div>
    TODO
  `,
  host: {
    class: 'page-w1200',
  },
  styleUrl: './page-about.component.css',
})
export class PageAboutComponent {}

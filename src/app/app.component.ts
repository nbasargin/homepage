import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCardComponent],
  template: `
    <div class="page-header">
      <nav class="navbar">
        <h1 class="navbar-title">Homepage</h1>
        <div class="navbar-item">ItemA</div>
        <div class="navbar-item">ItemB</div>
      </nav>
    </div>
    <div class="home-section">
      <img class="background" src="/assets/stable-diffusion-iceland.jpg" alt="main image" />
      <div class="down-arrow-container">
        <img class="down-arrow" src="/assets/down-arrow.svg" alt="down arrow" />
      </div>
    </div>

    <router-outlet />

    <div class="projects-section">
      <h2 class="section-header">Project Highlights</h2>
      <div class="project-list">
        <app-project-card title="Project 1"></app-project-card>
      </div>
    </div>

    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
    <div class="placeholder"></div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}

import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent],
  template: `
    <div class="projects-page">
      <h2 class="section-header">Projects</h2>
      <div class="project-list">
        <app-project-card class="project-card" title="Project 1"></app-project-card>
        <app-project-card class="project-card" title="Project 2"></app-project-card>
        <app-project-card
          class="project-card"
          title="Project 3 with a very very very very very very very very very long title"
        ></app-project-card>
        <app-project-card class="project-card" title="Project 4"></app-project-card>
        <app-project-card class="project-card" title="Project 5"></app-project-card>
      </div>
    </div>
  `,
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {}

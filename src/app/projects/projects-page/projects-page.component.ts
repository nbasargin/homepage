import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from './projects-data';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent],
  template: `
    <div class="projects-page">
      <h2 class="section-header">Projects</h2>
      <div class="project-list">
        @for (project of PROJECTS; track $index) {
          <app-project-card class="project-card" [projectData]="project"></app-project-card>
        }
      </div>
    </div>
  `,
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {
  PROJECTS = PROJECTS;
}

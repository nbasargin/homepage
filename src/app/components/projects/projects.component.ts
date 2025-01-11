import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  template: `
    <div class="projects-section">
      <h2 class="section-header">Project Highlights</h2>
      <div class="project-list">
        <app-project-card title="Project 1"></app-project-card>
      </div>
    </div>
  `,
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}

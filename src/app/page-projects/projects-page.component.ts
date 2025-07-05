import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from './projects-data';

@Component({
  selector: 'hp-page-projects',
  imports: [ProjectCardComponent],
  template: `
    <div class="block-title">Projects</div>
    <div class="project-list">
      @for (project of PROJECTS; track $index) {
        <hp-project-card class="project-card" [projectData]="project"></hp-project-card>
      }
    </div>
  `,
  host: {
    class: 'page-width',
  },
  styleUrl: './projects-page.component.css',
})
export class PageProjectsComponent {
  PROJECTS = PROJECTS;
}

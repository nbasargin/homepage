import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { ALL_PROJECTS } from '../projects/project-list';

@Component({
  selector: 'hp-page-projects',
  imports: [ProjectCardComponent],
  template: `
    <div class="block-title">Projects</div>
    <div class="project-list">
      @for (project of ALL_PROJECTS; track $index) {
        <hp-project-card [projectData]="project"></hp-project-card>
      }
    </div>
  `,
  host: {
    class: 'page-w1200',
  },
  styleUrl: './projects-page.css',
})
export class PageProjectsComponent {
  ALL_PROJECTS = ALL_PROJECTS;
}

import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { ALL_PROJECTS } from '../project-list';

@Component({
  selector: 'hp-page-projects',
  imports: [ProjectCardComponent],
  template: `
    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title mb-l">Projects</div>
        <div class="project-list">
          @for (project of ALL_PROJECTS; track $index) {
            <hp-project-card [projectData]="project"></hp-project-card>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './page-projects.css',
})
export class PageProjectsComponent {
  ALL_PROJECTS = ALL_PROJECTS;
}

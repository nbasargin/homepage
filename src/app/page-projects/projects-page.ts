import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card';
import { ALL_PROJECTS, TODO_PROJECTS } from '../project-list';

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
    <div style="height: 300px"></div>
    <div class="block-title">TODO</div>
    <div class="project-list">
      @for (project of TODO_PROJECTS; track $index) {
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
  TODO_PROJECTS = TODO_PROJECTS;
}

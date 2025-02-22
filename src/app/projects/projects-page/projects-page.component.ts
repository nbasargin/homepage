import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from './projects-data';
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCardComponent, PageWrapperComponent, PageTitleComponent],
  template: `
    <app-page-wrapper>
      <app-page-title>Projects</app-page-title>
      <div class="project-list">
        @for (project of PROJECTS; track $index) {
          <app-project-card class="project-card" [projectData]="project"></app-project-card>
        }
      </div>
    </app-page-wrapper>
  `,
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {
  PROJECTS = PROJECTS;
}

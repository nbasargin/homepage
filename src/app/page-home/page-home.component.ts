import { Component } from '@angular/core';
import { ProjectCardComponent } from '../projects/project-card.component';
import { ALL_PROJECTS, HIGHLIGHT_PROJECTS } from '../projects/project-list';

@Component({
  selector: 'hp-page-home',
  imports: [ProjectCardComponent],
  template: ` <div class="block-title">Hi!</div>
    <div>
      <p>Welcome to the homepage! Work in progress...</p>
    </div>
    <div class="block-title">Selected Projects</div>
    <div class="project-list">
      @for (project of HIGHLIGHT_PROJECTS; track $index) {
        <hp-project-card [projectData]="project"></hp-project-card>
      }
    </div>`,
  host: {
    class: 'page-width',
  },
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {
  HIGHLIGHT_PROJECTS = HIGHLIGHT_PROJECTS;
}

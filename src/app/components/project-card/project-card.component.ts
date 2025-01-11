import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  template: ` <div class="project-card">{{ title() }}</div> `,
  styleUrl: 'project-card.component.css',
})
export class ProjectCardComponent {
  title = input<string>();
}

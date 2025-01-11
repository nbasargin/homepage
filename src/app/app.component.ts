import { Component } from '@angular/core';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [PageHeaderComponent, HomeComponent, ProjectsComponent],
  template: `
    <app-page-header></app-page-header>
    <app-home></app-home>
    <app-projects></app-projects>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}

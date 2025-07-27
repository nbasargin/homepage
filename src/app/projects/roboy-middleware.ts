import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const roboyMiddlewareDescription: ProjectDescription = {
  title: 'Roboy Middleware',
  description: 'Roboy student team, middleware projects',
  imageUrl: '/assets/placeholder.png',
  detailsLink: '/roboy-middleware',
};

@Component({
  selector: 'hp-projects-roboy-middleware',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">Roboy - Middleware Team</div>

    <p>Roboy Middleware description</p>
    <div class="button-row">
      <a mat-button="elevated" href="https://todo.com" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        TODO
      </a>
    </div>

    <div class="block-subtitle">HackRoboy 2</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Summer Semester 2017 kick-off hackathon, Nerfinators team (2017-04-28+ HackRoboy 2 - Nerfinators)</p>
    <p>Before: 2017-02-09 Roboy meetup roboy v1</p>

    <div class="block-subtitle">Lighthouse Tracking</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Summer Semester 2017 main project: lighthouse tracking</p>
    <p>
      Mid-semester events: 2017-05-03 MakerSpace, 2017-06-03 Roboy Grillen, 2017-06-26 Roboy, 2017-07 Roboy & MakerSpace
    </p>

    <div class="block-subtitle">Robotics Lab Tour</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>After summer semester, visiting several robotics labs in Germany, France, and Switzerland</p>
    <p>2017-09-25 Roboy, Heidelberg etc</p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class RoboyMiddlewareComponent {}

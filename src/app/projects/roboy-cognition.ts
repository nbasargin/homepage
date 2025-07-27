import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const roboyCognitionDescription: ProjectDescription = {
  title: 'Roboy Cognition',
  description: 'Roboy student team, cognition projects',
  imageUrl: '/assets/projects/roboy-cognition-preview.jpg',
  detailsLink: '/roboy-cognition',
};

@Component({
  selector: 'hp-projects-roboy-cognition',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">Roboy Cognition</div>

    <p>Roboy Cognition description</p>
    <div class="button-row">
      <a mat-button="elevated" href="https://todo.com" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        TODO
      </a>
    </div>

    <div class="block-subtitle">Roboy Dialog</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Winter semester 2017-2018, Dialog team, later Ravestate</p>
    <p>
      Mid-semester events: 2017-10-20 TUM & Roboy, Garching, 2017-12-14 Roboy & Makerspace Weihnachtsparty, 2018-01-24
      Roboy WS1718 Midterm & Party
    </p>
    <p>
      Mid-semester events: 2018-03 Roboy Misc, 2018-03-14+ Roboy, KI Konferenz, 2018-03-22 Roboy Endterm WS1718,
      2018-03-29 Roboy Hotpot
    </p>

    <div class="block-subtitle">Supervising Student teams</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Summer semester 2018: supervising teams, participating at exhibitions</p>
    <p>Team supervision: BotBoy & TalkToTwo</p>
    <p>2018-04-25 Roboy, Hannover</p>
    <p>2018-06-21 Automatica</p>
    <p>Mid-semester events: 2018-04 Roboy & UTUM - nice pics, 2018-06 Roboy & UTUM - safe ftopus</p>

    <div class="block-subtitle">Later activities</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Exchange semester, no active participation at roboy for a while</p>
    <p>Visiting and helping with specific events</p>
    <p>
      2019-03-07 Roboy Riksha Finals, 2019-05-05 Roboy Hackathon, 2019-07-18 Roboy Finals, 2019-07-26 Roboy Rave Party
    </p>
    <p>2019-09-06+ Roboy Finals SS19 & Techfest, 2020-03-09 Roboy, 2020-09-05 Roboy Finals SS20</p>

    <p>
      Summary of the Ravestate dialog system: https://arxiv.org/abs/2310.01943, my contribution: web-based interface for
      real time visualization of state changes and transitions
    </p>

    <p>Roboy 2.0 in Deutsches Museum</p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class RoboyCognitionComponent {}

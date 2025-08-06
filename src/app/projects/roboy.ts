import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const roboyDescription: ProjectDescription = {
  title: 'Roboy',
  description: 'Roboy student team, middleware and cognition projects',
  imageUrl: '/assets/projects/roboy-cognition-preview.jpg',
  detailsLink: '/roboy',
};

@Component({
  selector: 'hp-projects-roboy',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">Roboy</div>

    <p>
      I had a chance to join the Roboy student team in 2017 and actively participated in middleware and cognition
      projects for three semesters. Apart from the main projects, the team organized several events and activities, such
      as hackathons, lab tours, and presentations at exhibitions.
    </p>

    <div class="button-row">
      <a mat-button="elevated" href="https://roboy.org/" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        roboy.org
      </a>
    </div>

    <div class="block-subtitle">Lighthouse Tracking</div>

    <p>
      After the kick-off hackathon in April 2017, I joined the middleware team and worked on the Lighthouse Tracking
      project during the summer semester. The team developed custom sensors to track the position of a robot by
      receiving infrared pulses emitted by HTC Vive lighthouses.
    </p>

    <div class="image-container">
      <img
        src="/assets/projects/roboy-lighthouse-tracking-h400.png"
        class="img-rounded img-h200"
        alt="lighthouses and sensors"
      />
    </div>

    <p>
      The lighthouses regularly sweep the room in horizontal and vertical directions. Based on the timing of the
      received pulses, the position of each sensor can be triangulated. My main contribution was to implement the signal
      processing algorithms on an FPGA to enable real-time tracking.
    </p>

    <div class="image-container">
      <div>fpga</div>
      <div>more images</div>
    </div>

    <div class="button-row">
      <a mat-button="elevated" href="https://arxiv.org/abs/2310.01943" target="_blank">
        <mat-icon fontIcon="open_in_new"></mat-icon>
        Hackaday Article
      </a>
      <a mat-button="elevated" href="https://github.com/Roboy/roboy_fpga_code" target="_blank">
        <mat-icon svgIcon="github"></mat-icon>
        Roboy FPGA GitHub
      </a>
    </div>

    <!--    
    2017-02-09 Roboy meetup roboy v1
    2017-04-28+ HackRoboy 2
    2017-05-03 MakerSpace
    2017-06-03 Roboy Grillen
    2017-06-26 Roboy
    2017-07 Roboy & MakerSpace
    -->

    <div class="block-subtitle">Robotics Lab Tour</div>
    <p>
      After summer semester 2017, the Roboy team organized a trip to visit several robotics labs in Germany, France, and
      Switzerland.
    </p>
    <!--    
    2017-09-25 Roboy, Heidelberg etc
    -->
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h200" alt="image" />
    </div>

    <div class="block-subtitle">Roboy Dialog System</div>
    <p>In the winter semester 2017-2018, I joined the cognition team and worked on the Roboy Dialog System.</p>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h200" alt="image" />
    </div>

    <p>
      During the following semesters, the dialog system was continuously improved into the Ravestate library. Here, my
      main contribution was a web-based interface for real-time visualization of state changes and transitions. A
      summary of the Ravestate system was later published as a preprint on arXiv.
    </p>

    <div class="button-row">
      <a mat-button="elevated" href="https://arxiv.org/abs/2310.01943" target="_blank">
        <mat-icon fontIcon="open_in_new"></mat-icon>
        Ravestate Paper
      </a>
      <a mat-button="elevated" href="https://github.com/Roboy/ravestate" target="_blank">
        <mat-icon svgIcon="github"></mat-icon>
        Ravestate GitHub
      </a>
    </div>

    <!--    
    Mid-semester WS1718 events:
    2017-10-20 TUM & Roboy, Garching
    2017-12-14 Roboy & Makerspace Weihnachtsparty
    2018-01-24 Roboy WS1718 Midterm & Party
    2018-03 Roboy Misc
    2018-03-14+ Roboy, KI Konferenz
    2018-03-22 Roboy Endterm WS1718
    2018-03-29 Roboy Hotpot
    -->

    <div class="block-subtitle">Supervising Student Teams</div>

    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h200" alt="image" />
    </div>
    <p>Summer semester 2018: supervising teams, participating at exhibitions</p>
    <p>Team supervision: BotBoy & TalkToTwo</p>
    <p>2018-04-25 Roboy, Hannover</p>
    <p>2018-06-21 Automatica</p>
    <p>Mid-semester events: 2018-04 Roboy & UTUM - nice pics, 2018-06 Roboy & UTUM - safe ftopus</p>

    <div class="block-subtitle">Later activities</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h200" alt="image" />
    </div>
    <p>Exchange semester, no active participation at roboy for a while</p>
    <p>Visiting and helping with specific events</p>
    <p>
      2019-03-07 Roboy Riksha Finals, 2019-05-05 Roboy Hackathon, 2019-07-18 Roboy Finals, 2019-07-26 Roboy Rave Party
    </p>
    <p>2019-09-06+ Roboy Finals SS19 & Techfest, 2020-03-09 Roboy, 2020-09-05 Roboy Finals SS20</p>

    <p>Roboy 2.0 in Deutsches Museum</p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class RoboyComponent {}

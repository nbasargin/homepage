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

    <div class="image-container">
      <img src="/assets/projects/roboy-logo-h400.png" class="img-rounded img-h200" alt="Roboy logo" />
    </div>

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
      <img src="/assets/projects/roboy-de0-nano-h400.jpg" class="img-rounded img-h200" alt="DE0-nano board" />
    </div>

    <p>
      The lighthouses regularly sweep the room in horizontal and vertical directions. Based on the timing of the
      received pulses, the position of each sensor can be triangulated. My main contribution was to implement the signal
      processing algorithms on an FPGA to enable real-time tracking.
    </p>

    <div class="button-row">
      <a mat-button="elevated" href="https://arxiv.org/abs/2310.01943" target="_blank">
        <mat-icon fontIcon="open_in_new"></mat-icon>
        Hackaday Article
      </a>
      <a mat-button="elevated" href="https://github.com/Roboy/roboy_fpga_code" target="_blank">
        <mat-icon svgIcon="github"></mat-icon>
        Roboy FPGA Code
      </a>
    </div>

    <div class="block-subtitle">Robotics Lab Tour</div>
    <p>
      After summer semester 2017, the Roboy team organized a trip to visit several robotics labs in Germany, France, and
      Switzerland. We visited HBP Neuromorphic Computing (Heidelberg), HBP Neurorobotics (Karlsruhe), High Performance
      Humanoid Technologies Lab (Karlsruhe), Aldebaran Robotics (Paris), Sony CSL (Paris), RoBioSS (Poitiers),
      Génération Robots (Mérignac), Flowers Lab (Talence), and EPFL BioRob (Lausanne).
    </p>

    <div class="image-container">
      <img
        src="/assets/projects/roboy-lab-tour-karlsruhe-h400.jpg"
        class="img-rounded img-h250"
        alt="Lauron robot, HBP Neurorobotics, Karlsruhe"
      />
      <img
        src="/assets/projects/roboy-lab-tour-robioss-h400.jpg"
        class="img-rounded img-h250"
        alt="Robotic hand, RoBioSS, Poitiers"
      />
      <img
        src="/assets/projects/roboy-lab-tour-talence-h400.jpg"
        class="img-rounded img-h250"
        alt="Poppy robots, Flowers Lab, Talence"
      />
      <img
        src="/assets/projects/roboy-lab-tour-epfl-h400.jpg"
        class="img-rounded img-h250"
        alt="Pleurobot, EPFL BioRob, Lausanne"
      />
    </div>

    <div class="block-subtitle">Roboy Dialog System</div>
    <p>
      In the winter semester 2017-2018, I joined the cognition team and worked on the Roboy Dialog System. Before LLMs
      became popular, we focused on rule-based approaches and state machines for dialog management.
    </p>
    <div class="image-container">
      <img src="/assets/projects/roboy-dialog-states-h400.jpg" class="img-rounded img-h250" alt="State transitions" />
    </div>

    <p>
      During the following semesters, the dialog system was improved and rewritten from Java to Python. Here, my main
      contribution was a web-based interface for real-time visualization of state changes and transitions. A summary of
      the Ravestate system was later published as a preprint on arXiv.
    </p>

    <div class="button-row">
      <a mat-button="elevated" href="https://arxiv.org/abs/2310.01943" target="_blank">
        <mat-icon fontIcon="open_in_new"></mat-icon>
        Ravestate Summary
      </a>
      <a mat-button="elevated" href="https://github.com/Roboy/ravestate" target="_blank">
        <mat-icon svgIcon="github"></mat-icon>
        Ravestate
      </a>
      <a mat-button="elevated" href="https://github.com/Roboy/roboy_dialog" target="_blank">
        <mat-icon svgIcon="github"></mat-icon>
        Roboy Dialog
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

    <div class="block-subtitle">Building Roboy 2.0</div>

    <p>
      Winter semester 2017-2018 was also the time when the Roboy team started building Roboy 2.0. Many parts have been
      3D printed, and the team worked on the mechanical design, electronics, and software. Roboy 2.0 was unveiled at the
      Hannover Messe in April 2018. As of 2025, Roboy 2.0 is on permanent display at the Deutsches Museum in Munich.
    </p>

    <div class="image-container">
      <img
        src="/assets/projects/roboy-junior-and-v2-h400.jpg"
        class="img-rounded img-h250"
        alt="Roboy Junior and Roboy v2.0"
      />
      <img src="/assets/projects/roboy-v2-pelvis-h400.jpg" class="img-rounded img-h250" alt="3D printed pelvis" />
      <img src="/assets/projects/roboy-v2-body-h400.jpg" class="img-rounded img-h250" alt="Assembled body" />
    </div>

    <div class="block-subtitle">Supervising Student Teams</div>

    <p>
      In the summer semester 2018 I had a chance to supervise two student teams: BotBoy and TalkToTwo. BotBoy focused on
      refining the dialog system and implementation of a Telegram chatbot. TalkToTwo worked on improving the audio
      processing and distinguishing between different speakers.
    </p>

    <!--
    SS18 events:
    2018-04-25 Roboy, Hannover
    2018-06-21 Automatica
    2018-04 Roboy & UTUM - nice pics
    2018-06 Roboy & UTUM - safe ftopus
    -->

    <!--
    Later events:
    Exchange semester, no active participation at roboy for a while, Visiting and helping with specific events
    2019-03-07 Roboy Riksha Finals
    2019-05-05 Roboy Hackathon
    2019-07-18 Roboy Finals
    2019-07-26 Roboy Rave Party
    2019-09-06+ Roboy Finals SS19 & Techfest
    2020-03-09 Roboy
    2020-09-05 Roboy Finals SS20
    -->
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class RoboyComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';
import { GalleryComponent, GalleryImage } from '../gallery/gallery';

export const roboyDescription: ProjectDescription = {
  title: 'Roboy',
  description: 'Roboy student team, middleware and cognition projects',
  imageUrl: '/assets/projects/roboy/roboy-preview.700x400.png',
  detailsLink: '/roboy',
};

@Component({
  selector: 'hp-projects-roboy',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, GalleryComponent],
  template: `
    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title">Roboy</div>

        <p>
          I had a chance to join the Roboy student team in 2017 and actively participated in middleware and cognition
          projects for three semesters. Apart from the main projects, the team organized several events and activities,
          such as hackathons, lab tours, and presentations at exhibitions.
        </p>

        <div class="button-row">
          <a mat-flat-button href="https://roboy.org/" target="_blank">
            <mat-icon>open_in_new</mat-icon>
            roboy.org
          </a>
        </div>

        <div class="block-subtitle mt-l">Lighthouse Tracking</div>

        <p>
          After the kick-off hackathon in April 2017, I joined the middleware team and worked on the Lighthouse Tracking
          project during the summer semester. The team developed custom sensors to track the position of a robot by
          receiving infrared pulses emitted by HTC Vive lighthouses.
        </p>

        <hp-gallery [images]="lighthouseImages"></hp-gallery>

        <p>
          The lighthouses regularly sweep the room in horizontal and vertical directions. Based on the timing of the
          received pulses, the position of each sensor can be triangulated. My main contribution was to implement the
          signal processing algorithms on an FPGA to enable real-time tracking.
        </p>

        <div class="button-row">
          <a mat-flat-button href="https://arxiv.org/abs/2310.01943" target="_blank">
            <mat-icon fontIcon="open_in_new"></mat-icon>
            Hackaday Article
          </a>
          <a mat-flat-button href="https://github.com/Roboy/roboy_fpga_code" target="_blank">
            <mat-icon svgIcon="github"></mat-icon>
            Roboy FPGA Code
          </a>
        </div>

        <div class="block-subtitle mt-l">Robotics Lab Tour</div>
        <p>
          After summer semester 2017, the Roboy team organized a trip to visit several robotics labs in Germany, France,
          and Switzerland. We visited HBP Neuromorphic Computing (Heidelberg), HBP Neurorobotics (Karlsruhe), High
          Performance Humanoid Technologies Lab (Karlsruhe), Aldebaran Robotics (Paris), Sony CSL (Paris), RoBioSS
          (Poitiers), Génération Robots (Mérignac), Flowers Lab (Talence), and EPFL BioRob (Lausanne).
        </p>

        <hp-gallery [images]="labTourImages"></hp-gallery>

        <div class="block-subtitle mt-l">Roboy Dialog System</div>
        <p>
          In the winter semester 2017-2018, I joined the cognition team and worked on the Roboy Dialog System. Before
          LLMs became popular, we focused on rule-based approaches and state machines for dialog management.
        </p>

        <hp-gallery [images]="dialogImages"></hp-gallery>

        <p>
          During the following semesters, the dialog system was improved and rewritten from Java to Python. Here, my
          main contribution was a web-based interface for real-time visualization of state changes and transitions. A
          summary of the Ravestate system was later published as a preprint on arXiv.
        </p>

        <div class="button-row">
          <a mat-flat-button href="https://arxiv.org/abs/2310.01943" target="_blank">
            <mat-icon fontIcon="open_in_new"></mat-icon>
            Ravestate Summary
          </a>
          <a mat-flat-button href="https://github.com/Roboy/ravestate" target="_blank">
            <mat-icon svgIcon="github"></mat-icon>
            Ravestate
          </a>
          <a mat-flat-button href="https://github.com/Roboy/roboy_dialog" target="_blank">
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

        <div class="block-subtitle mt-l">Building Roboy 2.0</div>

        <p>
          Winter semester 2017-2018 was also the time when the Roboy team started building Roboy 2.0. Many parts have
          been 3D printed, and the team worked on the mechanical design, electronics, and software. Roboy 2.0 was
          unveiled at the Hannover Messe in April 2018. As of 2025, Roboy 2.0 is on permanent display at the Deutsches
          Museum in Munich.
        </p>

        <hp-gallery [images]="roboyV2Images"></hp-gallery>

        <div class="block-subtitle mt-l">Supervising Student Teams</div>

        <p>
          In the summer semester 2018 I had a chance to supervise two student teams: BotBoy and TalkToTwo. BotBoy
          focused on refining the dialog system and implementation of a Telegram chatbot. TalkToTwo worked on improving
          the audio processing and distinguishing between different speakers.
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
      </div>
    </div>
  `,
  styles: '',
})
export class RoboyComponent {
  lighthouseImages: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/roboy/roboy-lighthouse-tracking.1078x622.png',
      imgWidth: 1078,
      imgHeight: 622,
      thumbSrc: '/assets/projects/roboy/roboy-lighthouse-tracking.693x400.png',
      thumbAlt: 'Lighthouses regularly sweep the room with lasers, allowing to triangulate sensor positions.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/roboy/roboy-de0-nano.2730x1851.jpg',
      imgWidth: 2730,
      imgHeight: 1851,
      thumbSrc: '/assets/projects/roboy/roboy-de0-nano.590x400.jpg',
      thumbAlt: 'DE0-nano board used for signal processing.',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  labTourImages: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/roboy/roboy-lab-tour-karlsruhe.4160x3120.jpg',
      imgWidth: 4160,
      imgHeight: 3120,
      thumbSrc: '/assets/projects/roboy/roboy-lab-tour-karlsruhe.667x500.jpg',
      thumbAlt: 'Lauron robot, HBP Neurorobotics, Karlsruhe.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/roboy/roboy-lab-tour-robioss.4160x3120.jpg',
      imgWidth: 4160,
      imgHeight: 3120,
      thumbSrc: '/assets/projects/roboy/roboy-lab-tour-robioss.667x500.jpg',
      thumbAlt: 'Robotic hand, RoBioSS, Poitiers.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/roboy/roboy-lab-tour-talence.3120x2340.jpg',
      imgWidth: 3120,
      imgHeight: 2340,
      thumbSrc: '/assets/projects/roboy/roboy-lab-tour-talence.667x500.jpg',
      thumbAlt: 'Poppy robots, Flowers Lab, Talence.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/roboy/roboy-lab-tour-epfl.3655x2741.jpg',
      imgWidth: 3655,
      imgHeight: 2741,
      thumbSrc: '/assets/projects/roboy/roboy-lab-tour-epfl.667x500.jpg',
      thumbAlt: 'Pleurobot, EPFL Biorob, Lausanne.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
  ];

  dialogImages: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/roboy/roboy-dialog-states.2505x1408.png',
      imgWidth: 2505,
      imgHeight: 1408,
      thumbSrc: '/assets/projects/roboy/roboy-dialog-states.890x500.png',
      thumbAlt: 'Dialog system state transitions.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
  ];

  roboyV2Images: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/roboy/roboy-junior-and-v2.1280x853.jpg',
      imgWidth: 1280,
      imgHeight: 853,
      thumbSrc: '/assets/projects/roboy/roboy-junior-and-v2.750x500.jpg',
      thumbAlt: 'Roboy 2.0 and Roboy Junior.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/roboy/roboy-v2-pelvis.1217x913.jpg',
      imgWidth: 1217,
      imgHeight: 913,
      thumbSrc: '/assets/projects/roboy/roboy-v2-pelvis.666x500.jpg',
      thumbAlt: '3D-printed pelvis of Roboy 2.0.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/roboy/roboy-v2-body.1280x853.jpg',
      imgWidth: 1280,
      imgHeight: 853,
      thumbSrc: '/assets/projects/roboy/roboy-v2-body.750x500.jpg',
      thumbAlt: 'Assembled body of Roboy 2.0.',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
  ];
}

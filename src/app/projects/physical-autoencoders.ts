import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';
import { ListEntryComponent } from '../list-entry/list-entry';
import { GalleryComponent, GalleryImage } from '../gallery/gallery';

export const physicalAutoencodersDescription: ProjectDescription = {
  title: 'Physical Autoencoders',
  description: 'Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation',
  imageUrl: '/assets/projects/physical-autoencoders-preview.png',
  detailsLink: '/physical-autoencoders',
};

@Component({
  selector: 'hp-projects-physical-autoencoders',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, ListEntryComponent, GalleryComponent],
  template: `
    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title">Physical Autoencoders</div>

        <p>
          During my PhD, I explored the fusion of machine learning and physics into a combined autoencoder architecture.
          The autoencoder provides an explainable approach to soil moisture estimation from Polarimetric Synthetic
          Aperture Radar (PolSAR). The following publication is related to this work:
        </p>

        <hp-list-entry
          [title]="'Explainable Physical PolSAR Autoencoders for Soil Moisture Estimation'"
          [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
          [place]="'CVPR Workshops'"
          [time]="'2025'"
          [paperLink]="
            'https://openaccess.thecvf.com/content/CVPR2025W/EarthVision/papers/Basargin_Explainable_Physical_PolSAR_Autoencoders_for_Soil_Moisture_Estimation_CVPRW_2025_paper.pdf'
          "
          [githubLink]="'https://github.com/nbasargin/nb2025earthvision'"
        >
        </hp-list-entry>

        <!-- TODO: poster link -->

        <div class="block-subtitle mt-l">Physics Meets Machine Learning</div>

        <p>
          Geophysical parameter estimation techniques from SAR data can be broadly categorized into physics-based models
          and data-driven machine learning (ML) methods. Forward physical models are derived from electromagnetic theory
          and predict the radar signal given a set of geophysical parameters (e.g. soil moisture).
        </p>

        <hp-gallery [images]="physicalImage"></hp-gallery>

        <p>
          In contrast, supervised ML methods are commonly trained to predict geophysical parameters by learning the
          patterns from large datasets.
        </p>

        <hp-gallery [images]="mlImage"></hp-gallery>

        <p>
          The main idea of this paper is to combine ML with physical models into a single autoencoder architecture. An
          ML encoder projects the data into a physical latent space, where each latent parameter has a physical meaning
          (e.g. soil moisture, surface intensity, etc.). The latent parameters are then passed through a differentiable
          physics-based decoder to reconstruct the original signal.
        </p>

        <hp-gallery [images]="combinedImage"></hp-gallery>

        <p>
          This approach creates a fully explainable latent space, provides estimates for the physical parameters, and
          allows to assess the reliability of the estimates through the physical model. The architecture can be trained
          in a fully self-supervised way using unlabeled data and then fine-tuned on labeled datasets to improve the
          prediction performance.
        </p>

        <div class="block-subtitle mt-l">EarthVision and CVPR 2025</div>

        <p>The conference took place in Nashville, Tennessee, USA. Here are some impressions.</p>

        <hp-gallery [images]="cvprImages"></hp-gallery>
      </div>
    </div>
  `,
  styles: '',
})
export class PhysicalAutoencodersComponent {
  physicalImage: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-physics.1000x500.png',
      imgWidth: 1000,
      imgHeight: 500,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-physics.1000x500.png',
      thumbAlt: 'Physical forward model',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  mlImage: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-ml.1000x500.png',
      imgWidth: 1000,
      imgHeight: 500,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-ml.1000x500.png',
      thumbAlt: 'ML model',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  combinedImage: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-combined.1500x500.png',
      imgWidth: 1500,
      imgHeight: 500,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-combined.1500x500.png',
      thumbAlt: 'Physical autoencoder',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  cvprImages: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-01.4080x3072.jpg',
      imgWidth: 4080,
      imgHeight: 3072,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-01.664x500.jpg',
      thumbAlt: 'Social event',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-02.3402x2562.jpg',
      imgWidth: 3402,
      imgHeight: 2562,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-02.664x500.jpg',
      thumbAlt: 'Tech demos',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-03.4080x3072.jpg',
      imgWidth: 4080,
      imgHeight: 3072,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-03.664x500.jpg',
      thumbAlt: 'Poster session',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-04.2651x1996.jpg',
      imgWidth: 2651,
      imgHeight: 1996,
      thumbSrc: '/assets/projects/physical-autoencoders/physical-autoencoders-cvpr-04.664x500.jpg',
      thumbAlt: 'Keynotes',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
  ];
}

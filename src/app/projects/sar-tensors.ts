import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';
import { ListEntryComponent } from '../list-entry/list-entry';
import { GalleryComponent, GalleryImage } from '../gallery/gallery';

export const sarTensorsDescription: ProjectDescription = {
  title: 'SAR Tensors',
  description: 'Tensor decompositions for SAR data',
  imageUrl: '/assets/projects/sar-tensors/sar-tensors-constrained-td-preview.700x400.png',
  detailsLink: '/sar-tensors',
};

@Component({
  selector: 'hp-projects-sar-tensors',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, ListEntryComponent, GalleryComponent],
  template: `
    <div class="grid-800 pt-l pb-l">
      <div class="center-col">
        <div class="block-title">SAR Tensors</div>
        <p>
          A large portion of my PhD is dedicated to tensor decompositions for SAR data, which features multiple
          dimensions including time, polarization, and frequency. The main motivation is to extract information along
          several dimensions at once, instead of looking at each data dimension individually. The following publication
          is related to this work:
        </p>

        <hp-list-entry
          [title]="'Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series Analysis'"
          [descriptionLines]="['Nikita Basargin, Alberto Alonso-González, Irena Hajnsek']"
          [place]="'IEEE TGRS'"
          [time]="'2023'"
          [paperLink]="'https://ieeexplore.ieee.org/document/10313300'"
        >
        </hp-list-entry>

        <div class="block-subtitle mt-l">Constrained Decompositions</div>
        <p>
          Standard methods like Canonical Polyadic (CP) and Tucker tensor decompositions are commonly used for
          multidimensional data analysis.
        </p>

        <hp-gallery [images]="cpImage"></hp-gallery>

        <p>
          However, when working with SAR data, it is important to incorporate constraints to guarantee physically valid
          and interpretable results (e.g., non-negative backscatter powers). The first publication introduces a flexible
          and extensible framework for joint analysis of multidimensional SAR data using constrained tensor
          decompositions. The proposed method enables precise control over the output shape and applied constraints.
        </p>

        <hp-gallery [images]="constrainedImage"></hp-gallery>

        <div class="block-subtitle mt-l">Decomposition as an Optimization Problem</div>
        <p>
          The decomposition is formulated as an optimization problem, and is solved by iterative gradient descent. In
          the forward pass, the method starts with unconstrained factors and applies constraint functions to restrict
          the solution space to physically meaningful values. Then, it computes the reconstructed tensor and the
          distance between the reconstruction and the input data.
        </p>

        <hp-gallery [images]="forwardPassImage"></hp-gallery>

        <p>
          To minimize the distance, gradients to the unconstrained factors are propagated in the backward pass, and the
          optimization step is performed to update the factors. The process is repeated until convergence.
        </p>

        <div class="block-subtitle mt-l">Polarimetric Time Series Analysis</div>
        <p>
          The proposed framework is applied to polarimetric SAR time series data to analyze changes over agricultural
          areas. The obtained temporal factors describe the changes in the signal in a compact way and show a
          correlation to certain crop parameters. Furthermore, the methods allows to quantify changes in more detail and
          provides an interpretation through the extracted polarimetric factors.
        </p>
      </div>
    </div>
  `,
  styles: '',
})
export class SarTensorsComponent {
  cpImage: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/sar-tensors/sar-tensors-cp-decomp.1500x500.png',
      imgWidth: 1500,
      imgHeight: 500,
      thumbSrc: '/assets/projects/sar-tensors/sar-tensors-cp-decomp.1500x500.png',
      thumbAlt: 'CP decomposition',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  constrainedImage: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/sar-tensors/sar-tensors-constrained-td.1500x500.png',
      imgWidth: 1500,
      imgHeight: 500,
      thumbSrc: '/assets/projects/sar-tensors/sar-tensors-constrained-td.1500x500.png',
      thumbAlt: 'Constrained decomposition',
      thumbClass: 'img-rounded img-h200',
      thumbCropped: false,
    },
  ];

  forwardPassImage: Array<GalleryImage> = [
    {
      imgSrc: '/assets/projects/sar-tensors/sar-tensors-constrained-td-forward.1500x800.png',
      imgWidth: 1500,
      imgHeight: 800,
      thumbSrc: '/assets/projects/sar-tensors/sar-tensors-constrained-td-forward.1500x800.png',
      thumbAlt: 'Forward pass',
      thumbClass: 'img-rounded img-h300',
      thumbCropped: false,
    },
  ];
}

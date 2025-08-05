import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const constrainedTDDescription: ProjectDescription = {
  title: 'Constrained TD',
  description: 'Constrained tensor decompositions (TD) for SAR time series analysis',
  imageUrl: '/assets/projects/constrained-td-preview.png',
  detailsLink: '/constrained-td',
};

@Component({
  selector: 'hp-projects-constrained-td',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">Constrained Tensor Decompositions</div>

    <p>
      TGRS 2023 publication: Constrained Tensor Decompositions for SAR Data: Agricultural Polarimetric Time Series
      Analysis
    </p>
    <p>
      This work introduces a flexible and extensible framework for joint analysis of multidimensional SAR data with
      constrained tensor decompositions. The main motivation is to extract information along several dimensions at once,
      instead of looking at each data dimension individually.
    </p>
    <div class="button-row">
      <a mat-button="elevated" href="https://ieeexplore.ieee.org/document/10313300" target="_blank">
        <mat-icon>article</mat-icon>
        Paper
      </a>
    </div>

    <div class="block-subtitle">Adding Constraints</div>
    <p>
      Multidimensional SAR data is becoming increasingly available, with sensors capturing information across multiple
      dimensions such as time, polarization, and frequency. Standard methods like Canonical Polyadic (CP) and Tucker
      tensor decompositions are commonly used for multidimensional data analysis.
    </p>

    <div class="image-container">
      <img src="/assets/projects/constrained-td-cp-decomp.png" class="img-rounded img-h200" alt="CP decomposition" />
    </div>

    <p>
      The paper extends the CP decomposition to account for specific structure of SAR data and guarantee physically
      interpretable results (e.g., non-negative backscatter powers). The proposed method allows to use different
      distance metrics, and enables precise control over the output shape and applied constraints.
    </p>

    <div class="image-container">
      <img
        src="/assets/projects/constrained-td-proposed.png"
        class="img-rounded img-h200"
        alt="Constrained decomposition"
      />
    </div>

    <div class="block-subtitle">Decomposition as an Optimization Problem</div>
    <p>
      The decomposition is formulated as an optimization problem, and is solved by iterative gradient descent. In the
      forward pass, the method starts with unconstrained factors and applies constraint functions to restrict the
      solution space to physically meaningful values. Then, it computes the reconstructed tensor and the distance
      between the reconstruction and the input data.
    </p>

    <div class="image-container">
      <img src="/assets/projects/constrained-td-forward.png" class="img-rounded img-h300" alt="Forward pass" />
    </div>

    <p>
      To minimize the distance, gradients to the unconstrained factors are propagated in the backward pass, and the
      optimization step is performed to update the factors. The process is repeated until convergence.
    </p>

    <div class="block-subtitle">Polarimetric Time Series Analysis</div>
    <p>
      The proposed framework is applied to polarimetric SAR time series data to analyze changes over agricultural areas.
      The obtained temporal factors describe the changes in the signal in a compact way and show a correlation to
      certain crop parameters. Furthermore, the methods allows to quantify changes in more detail and provides an
      interpretation through the extracted polarimetric factors.
    </p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class ConstrainedTDComponent {}

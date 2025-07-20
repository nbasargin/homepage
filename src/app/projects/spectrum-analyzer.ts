import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const spectrumAnalyzerDescription: ProjectDescription = {
  title: 'Spectrum Analyzer',
  description: 'TUM Project: implementation of a spectrum analyzer on an FPGA',
  imageUrl: '/assets/placeholder.png',
  detailsLink: '/spectrum-analyzer',
};

@Component({
  selector: 'hp-projects-spectrum-analyzer',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">Spectrum Analyzer</div>

    <p>Spectrum Analyzer description</p>
    <div class="button-row">
      <a mat-button="elevated" href="https://todo.com" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        TODO
      </a>
    </div>

    <div class="block-subtitle">Subtitle</div>
    <div class="image-container">
      <img src="/assets/placeholder.png" class="img-rounded img-h400" alt="image" />
    </div>
    <p>Details</p>
  `,
  host: {
    class: 'page-w800',
  },
  styles: '',
})
export class SpectrumAnalyzerComponent {}

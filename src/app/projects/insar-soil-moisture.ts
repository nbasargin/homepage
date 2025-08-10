import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';
import { baseUrl } from '../../environments/environment';

export const insarSoilMoistureDescription: ProjectDescription = {
  title: 'InSAR Soil Moisture',
  description: 'Estimation of soil moisture using InSAR data',
  imageUrl: baseUrl + 'assets/placeholder.png',
  detailsLink: '/insar-soil-moisture',
};

@Component({
  selector: 'hp-projects-insar-soil-moisture',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">InSAR Soil Moisture</div>

    <p>InSAR Soil Moisture description</p>
    <div class="button-row">
      <a mat-button="elevated" href="https://todo.com" target="_blank">
        <mat-icon>open_in_new</mat-icon>
        TODO
      </a>
    </div>

    <div class="block-subtitle">Subtitle</div>
    <p>Details</p>
  `,
  styles: '',
})
export class InsarSoilMoistureComponent {}

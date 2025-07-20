import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDescription } from './project-description';

export const netGyroBoyDescription: ProjectDescription = {
  title: 'NetGyroBoy',
  description: 'Development of a Demonstrator for a Wireless Cyber-Physical Network',
  imageUrl: '/assets/projects/net-gyro-boy-preview.jpg',
  detailsLink: '/net-gyro-boy',
};

@Component({
  selector: 'hp-projects-net-gyro-boy',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="block-title">NetGyroBoy</div>

    <p>NetGyroBoy description</p>
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
export class NetGyroBoyComponent {}

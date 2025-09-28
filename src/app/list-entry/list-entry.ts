import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'hp-list-entry',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <div>
      <div class="item-title">{{ title() }}</div>
      @for (line of descriptionLines(); track line) {
        <div class="description-line">{{ line }}</div>
      }
      @for (tp of timePlaces(); track tp) {
        <div class="location-date">
          <div class="date">
            @if (tp.time) {
              <mat-icon fontIcon="date_range"></mat-icon>
              <span>{{ tp.time }}</span>
            }
          </div>
          <div class="location">
            @if (tp.place) {
              <mat-icon fontIcon="location_on"></mat-icon>
              <span>{{ tp.place }}</span>
            }
          </div>
        </div>
      }
    </div>
    <div>
      @if (githubLink()) {
        <a mat-icon-button href="{{ githubLink() }}" target="_blank">
          <mat-icon svgIcon="github"></mat-icon>
        </a>
      }
      @if (paperLink()) {
        <a mat-icon-button href="{{ paperLink() }}" target="_blank">
          <mat-icon fontIcon="article"></mat-icon>
        </a>
      }
    </div>
  `,
  styleUrl: 'list-entry.css',
})
export class ListEntryComponent {
  title = input<string>('');
  descriptionLines = input<Array<string>>([]);
  timePlaces = input<Array<{ time: string; place: string }>>([]);
  paperLink = input<string>('');
  githubLink = input<string>('');
}

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
        <div>{{ line }}</div>
      }
      <div class="location-date">
        @if (place()) {
          <div class="location">
            <mat-icon fontIcon="location_on"></mat-icon>
            <span>{{ place() }}</span>
          </div>
        }
        @if (time()) {
          <div class="date">
            <mat-icon fontIcon="date_range"></mat-icon>
            <span>{{ time() }}</span>
          </div>
        }
      </div>
      <div class="location-date">
        @if (place2()) {
          <div class="location">
            <mat-icon fontIcon="location_on"></mat-icon>
            <span>{{ place2() }}</span>
          </div>
        }
        @if (time2()) {
          <div class="date">
            <mat-icon fontIcon="date_range"></mat-icon>
            <span>{{ time2() }}</span>
          </div>
        }
      </div>
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
  place = input<string>('');
  time = input<string>('');
  place2 = input<string>('');
  time2 = input<string>('');
  paperLink = input<string>('');
  githubLink = input<string>('');
}

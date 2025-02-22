import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-web-surfels',
  imports: [CommonModule, MatCardModule],
  template: ` <div>Some infos about the web surfels project</div>
    <div>
      <a href="https://nbasargin.github.io/WebSurfels-Demo/">Demo</a>
      <a href="https://github.com/nbasargin/WebSurfels">Github</a>
    </div>`,
  styleUrl: 'web-surfels.component.css',
})
export class WebSurfelsComponent {}

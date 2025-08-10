import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

export interface GalleryImage {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  thumbSrc: string;
  thumbAlt: string;
  thumbClass: string;
  thumbCropped: boolean;
}

@Component({
  selector: 'hp-gallery',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="psw-gallery" [id]="galleryId()">
      @for (image of images(); track image) {
        <a [href]="image.imgSrc" [attr.data-pswp-width]="image.imgWidth" [attr.data-pswp-height]="image.imgHeight">
          <img [src]="image.thumbSrc" [alt]="image.thumbAlt" [classList]="image.thumbClass" />
        </a>
      }
    </div>
  `,
  styleUrl: 'gallery.css',
})
export class GalleryComponent {
  galleryId = input<string>('gallery_' + Math.round(Math.random() * 9999999).toString());
  images = input<Array<GalleryImage>>([
    {
      imgSrc: '/assets/projects/web-surfels-neuschwanstein-01-h500.jpg',
      imgWidth: 561,
      imgHeight: 500,
      thumbSrc: '/assets/projects/web-surfels-neuschwanstein-01-h500.jpg',
      thumbAlt: 'Thumbnail 1',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
    {
      imgSrc: '/assets/projects/web-surfels-neuschwanstein-02-h500.jpg',
      imgWidth: 704,
      imgHeight: 500,
      thumbSrc: '/assets/projects/web-surfels-neuschwanstein-02-h500.jpg',
      thumbAlt: 'Thumbnail 2',
      thumbClass: 'img-rounded img-h250',
      thumbCropped: false,
    },
  ]);

  ngAfterViewInit() {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${this.galleryId()}`,
      children: 'a',
      showHideAnimationType: 'zoom',
      pswpModule: PhotoSwipe,
    });
    lightbox.init();
  }
}

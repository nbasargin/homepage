import { AfterViewInit, Component, input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
// @ts-expect-error
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

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
    @for (image of images(); track image) {
      <a [href]="image.imgSrc" [attr.data-pswp-width]="image.imgWidth" [attr.data-pswp-height]="image.imgHeight">
        <img [src]="image.thumbSrc" [alt]="image.thumbAlt" [classList]="image.thumbClass" />
      </a>
    }
  `,
  host: {
    '[attr.id]': 'galleryId',
  },
  styleUrl: 'gallery.css',
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  images = input.required<Array<GalleryImage>>();

  galleryId = `gallery_${Math.round(Math.random() * 9999999)}`;
  private lightbox: PhotoSwipeLightbox = new PhotoSwipeLightbox({
    gallery: `#${this.galleryId}`,
    children: 'a',
    pswpModule: PhotoSwipe,
  });

  ngAfterViewInit() {
    new PhotoSwipeDynamicCaption(this.lightbox, { type: 'below' });
    this.lightbox.init();
  }

  ngOnDestroy(): void {
    this.lightbox.destroy();
  }
}

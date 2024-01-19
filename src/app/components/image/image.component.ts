import { Component, Input } from '@angular/core';
import { ImageProperties } from 'src/app/types/image-properties';

@Component({
  selector: 'app-image',
  standalone: false,
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() properties?: ImageProperties;
}

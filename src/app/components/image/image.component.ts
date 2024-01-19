import { Component, Input } from '@angular/core';
import { ImageProperties } from 'src/app/components/image/image-properties';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() properties?: ImageProperties;
}

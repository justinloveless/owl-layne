import { Component, Input } from '@angular/core';
import { ParagraphProperties } from 'src/app/types/paragraph-properties';

@Component({
  selector: 'app-paragraph',
  standalone: false,
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  @Input() properties?: ParagraphProperties;
}

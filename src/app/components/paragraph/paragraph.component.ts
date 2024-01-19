import { Component, Input } from '@angular/core';
import { ParagraphProperties } from 'src/app/components/paragraph/paragraph-properties';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss',
})
export class ParagraphComponent {
  @Input() properties?: ParagraphProperties;
}

import { Component } from './component';
import { ParagraphProperties } from './paragraph-properties';

export class Paragraph implements Component {
  type = 'paragraph';
  properties?: ParagraphProperties;
}

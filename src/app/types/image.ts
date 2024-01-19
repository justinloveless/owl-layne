import { Component } from './component';
import { ImageProperties } from './image-properties';

export class Image implements Component {
  type = 'image';
  properties?: ImageProperties;
}

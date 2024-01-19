import { Component } from '../component';
import { HeaderProperties } from './header-properties';

export class Header implements Component {
  type = 'header';
  properties?: HeaderProperties;
}

import { Component } from '../component';
import { FormProperties } from './form-properties';

export class Form implements Component {
  type = 'form';
  properties?: FormProperties;
}

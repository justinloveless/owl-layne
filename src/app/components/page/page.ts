import { Component } from '../component';
import {Layout} from "../layout/layout";

export class Page {
  pageId: string;
  title: string;
  components: Component[];

  constructor(pageId: string, title: string, components: Component[]) {
    this.pageId = pageId;
    this.title = title;
    this.components = components;
  }
}

import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   *
   */
  constructor(@Inject(APP_BASE_HREF) public baseHref: string) {
    console.log('baseHref', baseHref);

  }
}

import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  constructor(@Inject(APP_BASE_HREF) public baseHref: string, private http: HttpClient) {
    console.log('baseHref', baseHref);

    this.http.get('.' + baseHref + '../assets/pageData.json').subscribe(console.log);

  }
}

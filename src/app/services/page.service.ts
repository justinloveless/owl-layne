import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../types/page';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(
    @Inject(APP_BASE_HREF) public baseHref: string,
    private http: HttpClient
  ) {}

  getPageData(): Observable<{ pages: Page[] }> {
    return this.http.get<{ pages: Page[] }>(
      '.' + this.baseHref + '../assets/test.json'
    );
  }
}

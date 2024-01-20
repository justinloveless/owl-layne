import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import {SiteData} from "../components/site-data";

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(
    @Inject(APP_BASE_HREF) public baseHref: string,
    private http: HttpClient
  ) { }

  getPageData(): Observable<SiteData> {
    return this.http.get<SiteData>(
      '.' + this.baseHref + '../assets/pageData.json'
    );
  }
}

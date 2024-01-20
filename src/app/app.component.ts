import {Component, OnInit} from '@angular/core';
import {PageService} from "./services/page.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'owl-layne';
  
  constructor(private pageService: PageService) {
  }
  ngOnInit() {
    this.pageService.getSiteData().subscribe(data => {
      this.pageService.loadTheme(data);
    });
  }
}

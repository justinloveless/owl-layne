import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { Page } from 'src/app/types/page';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  page: Page | undefined;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const pageId = params.get('pageId');
      if (pageId) {
        this.loadPage(pageId);
      }
    });
  }

  loadPage(pageId: string): void {
    this.pageService.getPageData().subscribe((result) => {
      console.log('pages', result.pages);

      this.page = result.pages.find((p) => p.pageId === pageId);
      // Handle the case where the page is not found
    });
  }
}

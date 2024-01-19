import { Component, Input, OnInit } from '@angular/core';
import { HeaderProperties } from 'src/app/types/header-properties';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() properties?: HeaderProperties;

  ngOnInit(): void {
    console.log('properties for Header:', this.properties);
  }
}

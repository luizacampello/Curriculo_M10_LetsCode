import { Component } from '@angular/core';
import { NavBarData } from 'src/app/models/nav-bar-data.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  public NavBarData: Array<NavBarData> = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getNavBarArray();
  }

  getNavBarArray() {
    this.NavBarData = this.contentService.getNavBarArray();
  }
}

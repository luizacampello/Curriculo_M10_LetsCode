import { Component, SimpleChange } from '@angular/core';
import { NavBarData } from 'src/app/models/nav-bar-data.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  public NavBarData: Array<NavBarData> = [];
  isDisplayed: boolean = true;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getNavBarArray();
  }

  onResize(event:any) {

    const innerWidth = event.target.innerWidth;

    if (innerWidth <= 700) {
      this.isDisplayed = false;
    }
    else{
      this.isDisplayed = true;
    }
 }

  getNavBarArray() {
    this.NavBarData = this.contentService.getNavBarArray();
  }

  openCloseMenu(): void{
    this.isDisplayed = !this.isDisplayed;
  }
}

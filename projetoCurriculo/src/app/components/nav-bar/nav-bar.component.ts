import { Component, SimpleChange, Renderer2 } from '@angular/core';
import { NavBarData } from 'src/app/models/nav-bar-data.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  public NavBarData: Array<NavBarData> = [];
  public isDisplayed!: boolean;
  public isMobile! : boolean;

  constructor(private contentService: ContentService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.isDisplayed = (window.innerWidth) > 700;
    this.isMobile = !this.isDisplayed;
    this.getNavBarArray();
  }

  onResize(event:any) {

    const innerWidth = event.target.innerWidth;

    if (innerWidth <= 700) {
      this.isDisplayed = false;
      this.isMobile = true;
    }
    else{
      this.isDisplayed = true;
      this.isMobile = false;
    }

 }

  getNavBarArray() {
    this.NavBarData = this.contentService.getNavBarArray();
  }

  openCloseMenu(): void{
    this.isDisplayed = !this.isDisplayed;
  }

  isOpenMenuMobile(): boolean{
    return this.isDisplayed && this.isMobile;
  }
}

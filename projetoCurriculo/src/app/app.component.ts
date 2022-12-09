import { socialMediaData } from 'src/app/models/socialmedia-data.model';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projetoCurriculo';

  constructor (private ThemeService: ThemeService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.ThemeService.themeChanges().subscribe(theme => {
      if (theme.oldValue) {
        this.renderer.removeClass(document.body, theme.oldValue);
      }
      this.renderer.addClass(document.body, theme.newValue);
    })
  }


  public socialMediaArray: socialMediaData[] = [
    { name: "github", link: "https://github.com/luizacampello" },
    { name: "instagram", link: "https://www.instagram.com/lmcampello/" },
    { name: "linkedin", link: "https://www.linkedin.com/in/luizacampello/" },
];

}

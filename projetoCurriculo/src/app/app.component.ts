import { workExperienceData } from './models/workExperience-data.model';
import { socialMediaData } from 'src/app/models/socialmedia-data.model';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { educationExperienceData } from './models/educationExperience-data.model';
import { languageData } from './models/language-data.model';

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

}

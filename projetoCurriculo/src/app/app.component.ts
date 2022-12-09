import { workExperienceData } from './models/workExperience-data.model';
import { socialMediaData } from 'src/app/models/socialmedia-data.model';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { educationExperienceData } from './models/educationExperience-data.model';

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

  public workExperienceArray: workExperienceData[] = [
    { name: "Github",
      beginDate: "Janeiro-2020",
      endDate: "Atualmente",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis.",
      local: "Canada" },

      { name: "Google",
      beginDate: "Dezembro-2016",
      endDate: "Outubro-2019",
      description: "Lorem ipsum dolor elementum lorem ornare sit amet, consectetur adipiscing elit. Quisque scelerisque adipiscing diam non nisi semper. Maecenas facilisis placerat, facilisis mollis.",
      local: "Belo Horizonte-MG" },
  ];

  public educationExperienceArray: educationExperienceData[] = [
    { courseName: "Geologia",
      degree: "Graduação",
      beginDate: "Março-2014",
      endDate: "Dezembro-2020",
      local: "Universidade de Brasilia" },

      {courseName: "Processamento de imagens de Satélite",
      degree: "Mestrado",
      beginDate: "Janeiro-2021",
      endDate: "Atualmente",
      local: "PPGGAG - Universidade de Brasilia"},
  ];

}

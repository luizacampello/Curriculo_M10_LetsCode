import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { ContactFormContainerComponent } from './components/contact-form-container/contact-form-container.component';
import { AboutMeContainerComponent } from './components/about-me-container/about-me-container.component';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceContainerComponent } from './components/experience-container/experience-container.component';
import { SociaLMediaComponent } from './components/social-media/social-media.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { WorkExperiencesComponent } from './components/work-experiences/work-experiences.component';
import { EducationExperiencesComponent } from './components/education-experiences/education-experiences.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CardProjectComponent } from './components/projects-container/card-project/card-project.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormContainerComponent,
    AboutMeContainerComponent,
    HomeContainerComponent,
    ProjectsContainerComponent,
    FooterComponent,
    ExperienceContainerComponent,
    SociaLMediaComponent,
    SkillsComponent,
    LanguagesComponent,
    WorkExperiencesComponent,
    EducationExperiencesComponent,
    NavBarComponent,
    HomeInnerComponent,
    ThemeToggleComponent,
    CardProjectComponent,
    ScrollToTopComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

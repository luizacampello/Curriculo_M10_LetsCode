import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CardProjectComponent } from './components/projects-container/card-project/card-project.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';


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
    NavBarComponent,
    HomeInnerComponent,
    ThemeToggleComponent,
    CardProjectComponent,
    ScrollToTopComponent,
    TextBoxComponent,
    VerticalTimelineComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { ContactFormContainerComponent } from './components/contact-form-container/contact-form-container.component';
import { AboutMeContainerComponent } from './components/about-me-container/about-me-container.component';
import { ProjectsContainerComponent } from './components/projects-container/projects-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceContainerComponent } from './components/experience-container/experience-container.component';
import { SociaLMediaComponent } from './components/socia-l-media/socia-l-media.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

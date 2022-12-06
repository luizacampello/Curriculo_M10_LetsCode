import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormContainerComponent } from './components/contact-form-container/contact-form-container.component';
import { AboutMeContainerComponent } from './components/about-me-container/about-me-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormContainerComponent,
    AboutMeContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormContainerComponent } from './contact-form-container/contact-form-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

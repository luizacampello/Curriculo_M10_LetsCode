import { Component} from '@angular/core';
import { languageData } from 'src/app/models/language-data.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  public languagesArray : Array<languageData> = [];

  public detailsSign = "plus-lg";

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getlanguagesArray();
  }

  getlanguagesArray(): void {
    this.languagesArray = this.contentService.getlanguagesArray();
  }

  languageToggleEvent(event: any): void {
    if (event.target.open) {
      this.detailsSign = "dash-lg";
    } else {
      this.detailsSign = "plus-lg";
    }
  }
}

import { Component, Input } from '@angular/core';
import { languageData } from 'src/app/models/language-data.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  @Input() public languagesArray! : Array<languageData>;

}

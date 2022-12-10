import { Component, Input } from '@angular/core';
import { languageData } from 'src/app/models/language-data.model';

@Component({
  selector: 'app-about-me-container',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.css']
})
export class AboutMeContainerComponent {

  @Input() public languagesArray! : Array<languageData>;

}

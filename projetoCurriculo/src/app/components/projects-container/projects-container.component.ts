import { cardContent } from './../../models/card-content.model';
import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent {
  public cardsArray : Array<cardContent> = [];
  constructor (private contentService: ContentService) {}

  //ToDo: Ver todas as categorais e criar botões com *nGFor

  ngOnInit(): void {
    this.getCardsArray();
  }

  getCardsArray(): void {
    this.cardsArray = this.contentService.getCardsArray();
  }
}

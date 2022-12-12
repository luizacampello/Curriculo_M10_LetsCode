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
  public categoryArray : Array<string> = ["All"];

  //ToDo: Ver todas as categorais e criar botões com *nGFor

  ngOnInit(): void {
    this.getCardsArray();
    this.generateCategoryList();
    console.log(this.categoryArray);
  }

  getCardsArray(): void {
    this.cardsArray = this.contentService.getCardsArray();
  }

  generateCategoryList(): void {
    this.cardsArray.forEach(element => {
      let categoryTest = element.category.toLowerCase().trim();
    if(!this.categoryArray.includes(categoryTest)){
      const text = categoryTest.charAt(0).toUpperCase() + categoryTest.slice(1);
      this.categoryArray.push(text)
    }
  });
  }
}

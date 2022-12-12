import { cardContent } from './../../models/card-content.model';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent {
  @Input() public activeId = "All";
  public cardsArray : Array<cardContent> = [];
  public cardsArrayFilterd : Array<cardContent> = [];
  public categoryArray : Array<string> = ["All"];
  public destroyer:boolean = true;

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getCardsArray();
    this.generateCategoryList();
    this.cardsArrayFilterd = this.cardsArray;
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
  filterList(event: any){
  }
}

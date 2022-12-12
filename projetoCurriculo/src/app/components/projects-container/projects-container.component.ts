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
  public cardsArrayFiltered : Array<cardContent> = [];
  public categoryArray : Array<string> = ["All"];

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getCardsArray();
    this.generateCategoryList();
    this.cardsArrayFiltered = this.cardsArray;
  }

  getCardsArray(): void {
    this.cardsArray = this.contentService.getCardsArray();
  }

  generateCategoryList(): void {
    this.cardsArray.forEach(element => {
      let categoryText = element.category;
      const text = categoryText.charAt(0).toUpperCase() + categoryText.slice(1);
    if(!this.categoryArray.includes(text)){
      this.categoryArray.push(text)
    }
  });
  }
  filterList(event: any){
    const id = event.target.id.toLowerCase();
    if(id == "all"){
      this.cardsArrayFiltered = this.cardsArray;
    }
    else {
    this.cardsArrayFiltered = this.cardsArray.filter( e => e.category == id)
    }
  }
}

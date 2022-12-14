import { cardContent } from './../../models/card-content.model';
import { Component, Renderer2 } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})

export class ProjectsContainerComponent {
  public cardsArray : Array<cardContent> = [];
  public cardsArrayFiltered : Array<cardContent> = [];
  public categoryArray : Array<string> = ["ALL"];
  public id : string = "projectsContainer";

  constructor (private contentService: ContentService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getCardsArray();
    this.generateCategoryList();
    this.cardsArrayFiltered = this.cardsArray;
  }

  ngAfterViewInit(): void {
    this.activateButton("ALL");
  }

  getCardsArray(): void {
    this.cardsArray = this.contentService.getCardsArray();
  }

  generateCategoryList(): void {
    this.cardsArray.forEach(element => {
      let categoryText = element.category;
      const text = categoryText.toUpperCase();
      if(!this.categoryArray.includes(text)){
        this.categoryArray.push(text)
      }
    });
  }

  filterList(event: any){
    const id = event.target.id;
    this.activateButton(id);

    if(id == "ALL"){
      this.cardsArrayFiltered = this.cardsArray;
    }
    else {
      this.cardsArrayFiltered = this.cardsArray.filter( e => e.category.toUpperCase() == id.toUpperCase())
    }
  }

  activateButton(id: string) {
    let disableButton = document.querySelector(".selected");
    if(disableButton !== null){
      disableButton.classList.remove("selected");
    }

    let button = document.getElementById(id);
    if(button !== null){
      button.classList.add("selected");
    }
  }
}

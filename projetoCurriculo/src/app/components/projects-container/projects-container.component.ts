import { cardContent } from './../../models/card-content.model';
import { Component, Input, Renderer2 } from '@angular/core';
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

  constructor (private contentService: ContentService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getCardsArray();
    this.generateCategoryList();
    this.cardsArrayFiltered = this.cardsArray;

  }

  ngAfterViewInit(): void {
    this.activateButton("All");

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

    const id = event.target.id;
    this.activateButton(id);

    if(id == "All"){
      this.cardsArrayFiltered = this.cardsArray;
    }
    else {
      this.cardsArrayFiltered = this.cardsArray.filter( e => e.category == id.toLowerCase())
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

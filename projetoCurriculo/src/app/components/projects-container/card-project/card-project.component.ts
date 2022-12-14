import { DOCUMENT } from '@angular/common';
import { HomeInnerComponent } from './../../home-inner/home-inner.component';
import { Component, Input } from '@angular/core';
import { cardContent } from 'src/app/models/card-content.model';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {
@Input() cardData!:cardContent;
imageHasLoaded: boolean = false;

ngAfterViewInit(){
  if(!this.imageHasLoaded){
    this.reDoFrontCard();
  }
}

hasLoaded(){
 this.imageHasLoaded = true;
}

reDoFrontCard(){
  this.innerHtml += null;
}
}

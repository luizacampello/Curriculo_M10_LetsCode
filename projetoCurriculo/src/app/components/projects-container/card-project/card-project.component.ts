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
error: boolean = false;

failedLoad(){
  this.error = true;
}
}

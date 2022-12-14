import { TextContentData } from './../../models/text-content-data.model';
import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit{
  @Input() public componentId!: string;

  constructor (private contentService: ContentService) {};

  textContent!: TextContentData;

  public title? : string;
  public subTitle? : string;
  public text? : string[];

  ngOnInit(): void{
    this.getTextContentbyId(this.componentId);
    this.defineContent();
  }

  getTextContentbyId(id: string): void{
    this.textContent = this.contentService.getTextBoxContentById(id);
  }

  defineContent():void{
    this.title = this.textContent.title;
    this.subTitle = this.textContent.subTitle;
    this.text = this.textContent.text;
  }
}

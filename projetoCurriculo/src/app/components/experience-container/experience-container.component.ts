import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.css']
})
export class ExperienceContainerComponent {
  public id: string = "experienceContainer";
  public timelines!: string[];

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getTimelines();
  }

  getTimelines(): void{
    this.timelines = this.contentService.getTimelines();
  }
}

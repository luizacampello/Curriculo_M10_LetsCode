import { workExperienceData } from './../../models/workExperience-data.model';
import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css']
})
export class WorkExperiencesComponent {
  public workExperienceArray : Array<workExperienceData> = [];

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getWorkExperienceArray();
  }

  getWorkExperienceArray(): void {
    this.workExperienceArray = this.contentService.getWorkExperienceArray();
  }
}


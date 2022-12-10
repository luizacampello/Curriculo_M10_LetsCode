import { Component, Input } from '@angular/core';
import { educationExperienceData } from 'src/app/models/educationExperience-data.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-education-experiences',
  templateUrl: './education-experiences.component.html',
  styleUrls: ['./education-experiences.component.css']
})

export class EducationExperiencesComponent {
  public educationExperienceArray : Array<educationExperienceData> = [];

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.geteducationExperienceArray();
  }

  geteducationExperienceArray(): void {
    this.educationExperienceArray = this.contentService.geteducationExperienceArray();
  }

}

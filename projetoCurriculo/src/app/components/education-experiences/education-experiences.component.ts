import { Component, Input } from '@angular/core';
import { educationExperienceData } from 'src/app/models/educationExperience-data.model';

@Component({
  selector: 'app-education-experiences',
  templateUrl: './education-experiences.component.html',
  styleUrls: ['./education-experiences.component.css']
})

export class EducationExperiencesComponent {
  @Input() public educationExperienceArray! : Array<educationExperienceData>;

}

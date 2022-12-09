import { Component, Input } from '@angular/core';
import { educationExperienceData } from 'src/app/models/educationExperience-data.model';
import { workExperienceData } from 'src/app/models/workExperience-data.model';

@Component({
  selector: 'app-experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.css']
})
export class ExperienceContainerComponent {
  @Input() public workExperienceArray! : Array<workExperienceData>;
  @Input() public educationExperienceArray! : Array<educationExperienceData>;
}

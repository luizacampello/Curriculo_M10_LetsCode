import { workExperienceData } from './../../models/workExperience-data.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css']
})
export class WorkExperiencesComponent {
  @Input() public workExperienceArray! : Array<workExperienceData>;

}

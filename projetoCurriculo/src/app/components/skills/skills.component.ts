import { ContentService } from 'src/app/services/content.service';
import { Component } from '@angular/core';
import { SkillsData } from 'src/app/models/skills-data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public skillsData: Array<SkillsData> = [];
  public id: string = "skills";

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getSkillsArray();
  }
  getSkillsArray() {
    this.skillsData = this.contentService.getSkillsArray();
  }
}

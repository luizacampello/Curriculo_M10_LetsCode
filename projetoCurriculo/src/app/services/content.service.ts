import { Injectable } from '@angular/core';
import { educationExperienceData } from '../models/educationExperience-data.model';
import { socialMediaData } from '../models/socialmedia-data.model';
import { workExperienceData } from '../models/workExperience-data.model';
import { languageData } from '../models/language-data.model';
import content from '../../content/content.json';
import { SkillsData } from '../models/skills-data.model';
import { cardContent } from '../models/card-content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  workExperienceArray : Array<workExperienceData> = content.workExperience;
  educationExperienceArray : Array<educationExperienceData> = content.educationExperience;
  socialMediaArray : Array<socialMediaData> = content.socialMedia;
  languagesArray : Array<languageData> = content.languages;
  skillsArray: Array<SkillsData> = content.skills;
  projectCardsArray : Array<cardContent> = content.cardsContent;

  getWorkExperienceArray(): workExperienceData[] {
    return this.workExperienceArray;
  }

  geteducationExperienceArray(): educationExperienceData[] {
    return this.educationExperienceArray;
  }

  getsocialMediaArray(): socialMediaData[] {
    return this.socialMediaArray;
  }

  getlanguagesArray(): languageData[] {
    return this.languagesArray;
  }

  getSkillsArray(): SkillsData[] {
    return this.skillsArray;
  }

  getCardsArray(): cardContent[] {
    return this.projectCardsArray;
  }
}

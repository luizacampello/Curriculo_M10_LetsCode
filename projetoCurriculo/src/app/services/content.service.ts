import { Injectable } from '@angular/core';
import { educationExperienceData } from '../models/educationExperience-data.model';
import { socialMediaData } from '../models/socialmedia-data.model';
import { workExperienceData } from '../models/workExperience-data.model';
import { languageData } from '../models/language-data.model';
import content from '../../content/content.json';
import { SkillsData } from '../models/skills-data.model';
import { cardContent } from '../models/card-content.model';
import { TextContentData } from '../models/text-content-data.model';

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
  tWriterArray: Array<string> = content.tWriterContent;
  TextContentData : Array<TextContentData> = content.textContentData;

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

  getTWriterArray(): string[] {
    return this.tWriterArray;
  }

  getTextBoxContentById(propertyId: string): TextContentData {
    let TextBoxContent!: TextContentData;

    this.TextContentData.forEach(textItem => {
      if (textItem.id == propertyId) {
        TextBoxContent = textItem;
      }
    });

    return TextBoxContent;
  }
}


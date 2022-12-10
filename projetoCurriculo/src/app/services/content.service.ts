import { Injectable } from '@angular/core';
import { educationExperienceData } from '../models/educationExperience-data.model';
import { socialMediaData } from '../models/socialmedia-data.model';
import { workExperienceData } from '../models/workExperience-data.model';
import { languageData } from '../models/language-data.model';
import content from '../../content/content.json';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  workExperienceArray : Array<workExperienceData> = content.workExperience;
  educationExperienceArray : Array<educationExperienceData> = content.educationExperience;
  socialMediaArray : Array<socialMediaData> = content.socialMedia;
  languagesArray : Array<languageData> = content.languages;

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

}



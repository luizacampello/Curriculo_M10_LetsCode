import { NavBarData } from './../models/nav-bar-data.model';
import { TimelineData} from '../models/timeline-data.model';
import { Injectable } from '@angular/core';
import { socialMediaData } from '../models/socialmedia-data.model';
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

  socialMediaArray : Array<socialMediaData> = content.socialMedia;
  languagesArray : Array<languageData> = content.languages;
  skillsArray: Array<SkillsData> = content.skills;
  projectCardsArray : Array<cardContent> = content.cardsContent;
  tWriterArray: Array<string> = content.tWriterContent;
  textContentData : Array<TextContentData> = content.textContentData;
  timelineDataArray : Array<TimelineData> = content.timelineData;
  navBarArray: Array<NavBarData> = content.navBarData;

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
    let textBoxContent!: TextContentData;

    this.textContentData.forEach(textItem => {
      if (textItem.id == propertyId) {
        textBoxContent = textItem;
      }
    });

    return textBoxContent;
  }

  getTimelineInfo(timelineType: string ): TimelineData{
    let timelineContent!: TimelineData;

    this.timelineDataArray.forEach(element => {
      if (element.id == timelineType) {
        timelineContent = element;
      }
    });

    return timelineContent;
  }

  getTimelines() : string[]{
    console.log(this.timelineDataArray);
    let timelines: string[] = [];
    this.timelineDataArray.forEach(element => {
        timelines.push(element.id)
    });

    return timelines;
  }

  getNavBarArray(): NavBarData[] {
    return this.navBarArray;
  }
}


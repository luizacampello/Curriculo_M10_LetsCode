import { Component } from '@angular/core';
import { socialMediaData } from 'src/app/models/socialmedia-data.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SociaLMediaComponent {
  public socialMediaArray : Array<socialMediaData> = [];

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getsocialMediaArray();
  }

  getsocialMediaArray(): void {
    this.socialMediaArray = this.contentService.getsocialMediaArray();
  }

}

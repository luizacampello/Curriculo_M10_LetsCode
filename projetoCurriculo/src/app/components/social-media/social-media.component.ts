import { Component, Input } from '@angular/core';
import { socialMediaData } from 'src/app/models/socialmedia-data.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SociaLMediaComponent {
  @Input() public socialMediaArray! : Array<socialMediaData>;

}

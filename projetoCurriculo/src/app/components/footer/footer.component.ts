import { Component, Input } from '@angular/core';
import { socialMediaData } from 'src/app/models/socialmedia-data.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() public socialMediaArray! : Array<socialMediaData>;

}

import { TimelineData } from './../../models/timeline-data.model';
import { Component, Input } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.css']
})
export class VerticalTimelineComponent {
  @Input() public timelineId!: string;
  public timelineContent!: TimelineData;

  constructor (private contentService: ContentService) {}

  ngOnInit(): void {
    this.getTimelineArray(this.timelineId);
  }

  getTimelineArray(timelineId: string): void {
    this.timelineContent = this.contentService.getTimelineInfo(timelineId);
  }

}

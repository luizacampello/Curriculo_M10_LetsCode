import { TimelinePointData } from "./timeline-point-data.model";

export interface TimelineData {
    id: string,
    title: string,
    timelineElements: TimelinePointData[]
}

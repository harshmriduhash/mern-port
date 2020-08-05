import React from 'react';
import TimelineItem from './timeline_item';
import timelineData from '../../../util/timeline_data';
import '../../../styles/timeline.scss';


const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
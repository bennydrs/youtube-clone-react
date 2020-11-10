import React from 'react';
import './VideoRow.css';
import { Avatar } from '@material-ui/core';

const VideoRow = ({ views, channelImage, description, timestamp, channel, title, image }) => {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
        {/* <span className="videoRow__subs">
          <span className="videoRow__subsNumber">{subs}</span> Subscribers
        </span>{" "} */}
        {views} • {timestamp}
        
        <span className="videoRow__channel">
          <Avatar className="videoRow__channelImage" src={channelImage}></Avatar>
          <span className="videoRow__channelName">{channel}</span>
        </span>
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  )
}

export default VideoRow;

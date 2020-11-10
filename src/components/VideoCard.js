import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

const VideoCard = ({ image, title, channel, views, channelImage, timestamp, duration}) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt=""/>
      <p className="videoCard__duration"><span>{duration}</span></p>
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
        <div className="videoCard__text">
          <h4>{truncate(title, 47)}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;

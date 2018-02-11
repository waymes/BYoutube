import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const image = video.snippet.thumbnails.medium.url;
  return(
    <li className='video-list-item d-flex flex-row' onClick={() => onVideoSelect(video)}>
      <div className="video-list-image image-holder">
        <div className="image-inner" style={{ backgroundImage: `url(${image})` }} />
      </div>
      <div className='video-list-title'>
        <h6>{video.snippet.title}</h6>
        <span className='color999'>{video.snippet.channelTitle}</span>
      </div>
    </li>
  );
};

export default VideoItem;
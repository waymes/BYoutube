import React from 'react';
import VideoItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos && videos.map((video, key) => {
    return(
      <VideoItem key={key} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return(
    <div className='col-lg-4 video-list'>
      <h6>Up next</h6>
      <ul>
        {videos ? videoList : 'Loading...'}
      </ul>
    </div>
  );
};

export default VideoList;
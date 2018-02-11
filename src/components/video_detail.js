import React from 'react';

const VideoDetail = ({ video, searchText }) => {
  const videoId = video.id.videoId;
  const autoplay = searchText ? '?autoplay=1' : '';
  const url = `https://www.youtube.com/embed/${videoId}${autoplay}`;
  return(
    <div className='video-detail col-lg-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          src={url} className='embed-responsive-item'
          allowFullScreen
        />
      </div>
      <div className='video-detail-info'>
        <h4 className='video-detail-info-title'>{video.snippet.title}</h4>
        <h6 className='video-detail-info-description color999'>{video.snippet.description}</h6>
      </div>
    </div>
  );
};

export default VideoDetail;
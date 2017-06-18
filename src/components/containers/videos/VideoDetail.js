import React from 'react';
import Loading from '../loading/Loading.js';

const VideoDetail = ({video}) => {

  if(!video) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="container-all">
      <div className="container-all-video">
        <div className="container-video">
          <iframe className="iframe-src" width="560" height="315" src={url}></iframe>
        </div>
      </div>
      <div className="description-videos">
        <div className="video-title">{video.snippet.title}</div>
        <div className="video-description">{video.snippet.description}</div>
      </div>
    </div>
  )
}
export default VideoDetail

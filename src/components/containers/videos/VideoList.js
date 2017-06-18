import React from 'react'
import VideoListItem from './VideoListItem.js'
import './style.css';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelected={props.onVideoSelected}
        key={video.etag}
        video={video}
      />
    )
  })
  return (
    <ul className="container-ul">
      {videoItems}
    </ul>
  )
}

export default VideoList

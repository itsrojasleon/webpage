import React from 'react'

const VideoListItem = ({video, onVideoSelected}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  return(
    <li onClick={() => onVideoSelected(video)} className="list-videos" >
      <img src={imageUrl} className="image-url" alt={video.snippet.title} />
      <div className="list-videos-title">{video.snippet.title}</div>
    </li>
  )
}
export default VideoListItem

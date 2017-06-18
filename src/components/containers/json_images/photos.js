import React, { Component } from 'react'
import PhotosItem from './photos_item.js'

export default class Photos extends Component {
  render() {
    let photoItem
    if(this.props.photos){
      photoItem = this.props.photos.map((photo) => {
        return (
          <PhotosItem key={photo.title} photo={photo} />
        )
      })
    }

    return (
      <div>
        {photoItem}
      </div>
    )
  }
}

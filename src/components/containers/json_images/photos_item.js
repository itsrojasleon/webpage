import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class PhotosItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="title" >{this.props.photo.title}</div>
        <img className="image" src={this.props.photo.thumbnailUrl} alt="json-api" />
        <a href={this.props.photo.url} target="_blank"><FormattedMessage id="image" /></a>
        <style jsx>{`
          .container{
            border: 1px solid #ccc;
            padding: 15px;
            box-sizing: border-box;
            width: 25%;
            float: left;
          }
          .title{
            font-size: 20px;
            color: rgb(17,47,61);
            text-align: center;
            font-family: helvetica;
          }
          .image{
            display: block;
            margin: auto;
          }
          @media(max-width: 720px) {
            .container{
              width: 50%;
            }
          }
          @media(max-width: 520px) {
            .container{
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

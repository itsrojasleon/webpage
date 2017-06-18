import React, { Component } from 'react';
import CommentsPhotoShow from './CommentsPhotoShow.js';
import CommentsShowPhone from './CommentsShowPhone.js';
import CommentsCite from './CommentsCite.js';
import './style.css';
import { FormattedMessage } from 'react-intl';

export default class Comments extends Component {

  render() {
    return (
      <div className="container-comments">
        <p className="title-comments"><FormattedMessage id="speak-users" /></p>
        <CommentsPhotoShow user={this.props.user} />
        <CommentsShowPhone user={this.props.user} />
        <CommentsCite user={this.props.user} />
      </div>
    )
  }
}

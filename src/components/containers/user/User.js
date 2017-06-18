import React, { Component } from 'react';
import './style.css';

export default class User extends Component {
  render() {
    return (
      <div className="user-container">
        <img className="user-image" alt="presentation" src={this.props.user.photoURL} />
        <p className="user-display-name">{this.props.user.displayName}</p>
        <p className="text-email">{this.props.user.email}</p>
      </div>
    )
  }
}

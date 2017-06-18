import React, { Component } from 'react';
import firebase from 'firebase';
import './style.css';

export default class CommentsShowPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
  }

  componentDidMount() {
    const data1 = firebase.database();
    const descriptionRef1 = data1.ref(`DescriptionShowPhone-${this.props.user.displayName}`);
    descriptionRef1.on('value', snap => {
      if(snap.val() != null) {
        this.setState({
          description: snap.val().description
        })
      }
    });
  }

  render() {
    return (
      <div className="container-comments-children">
        <div className="comments-line">
          <img className="image-user-comments" src={this.props.user.photoURL} alt="fotografía del usuario" />
          <cite>{this.props.user.displayName}</cite>
          <p>{this.state.description}</p>
        </div>
      </div>
    )
  }
}

import React from 'react';
import './style.css';

export default class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: ''
    }
    this.handleAnimated = this.handleAnimated.bind(this);
  }

  handleAnimated() {
    this.setState({
      animated: 'is-liked'
    })
  }

  render() {

    return (
      <div className="heart">
        <div onClick={this.handleAnimated} className={`like ${this.state.animated}`}></div>
      </div>
    )
  }
}

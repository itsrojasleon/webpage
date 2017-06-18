import React from 'react';
import './style.css';
import cancel from '../../../../svg/cancel.svg';
import { FormattedMessage } from 'react-intl';

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: true
    }
    this.renderClick = this.renderClick.bind(this)
    this.changeClick = this.changeClick.bind(this)
    this.change = this.change.bind(this)
  }

  changeClick() {
    this.setState({
      click: false
    })
  }
  change() {
    this.setState({
      click: true
    })
  }

  renderClick() {
    if(this.state.click === true) {
      return (
        <button className="button-open-modal" onClick={this.changeClick}>Click me</button>
      )
  }else{
    return (
      <div className="overlay active" onClick={this.change}>
        <div className="modal">
          <img onClick={this.change} className="cross" src={cancel} alt="cross" />
          <h1>¡Cool!</h1>
          <p><FormattedMessage id="experience" /></p>
          <p className="click-cheet"><strong>"webpage"</strong></p>
          <p><FormattedMessage id="back-large" /> <strong className="go-back"><FormattedMessage id="back" /></strong>  </p>
          <div className="modal-buttons">
            <button onClick={this.change} className="btn warning"><FormattedMessage id="ok" /></button>
          </div>
        </div>
      </div>
    )
  }
  }

  render() {
    return (
      <div>
        {this.renderClick()}
      </div>
    )
  }
}

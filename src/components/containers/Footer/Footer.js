import React, { Component } from 'react'
import { Link } from 'react-router';
import Facebook from './icons/facebook-icon.svg';
import Youtube from './icons/youtube.svg';
import Twitter from './icons/twitter.svg';
import './style.css';
import Modal from './Modal/Modal.js';
import logo from '../../../logo.svg';
import logoDown from '../../../logoDown.svg';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

function mapStateToProps(state) {
  return {
    color: state.colorHeader,
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
      <div className={`container-footer`}>
        <div className="image">
          <img className="logo-footer" src={logo} alt="Logo-footer" />
        </div>
        <div className="description">
          <FormattedMessage id="enterprise" />
        </div>

          <div className="container-twitter">
            <a href="https://www.twitter.com/" target="_blank"><img alt="super-footer2" src={Twitter} /></a>
          </div>
          <div className="container-facebook">
            <a href="https://www.facebook.com/" target="_blank"><img alt="super-footer3" src={Facebook} /></a>
          </div>
          <div className="container-youtube">
            <a href="https://www.youtube.com/channel/UCMmSIbY7b5S1ayAiqD8jt_g" target="_blank"><img alt="super-footer4" src={Youtube} /></a>
          </div>
        </div>
          <div className={`last-item ${this.props.color}`}>
            <Link href="/conditions" className="last-item-link"><FormattedMessage id="use" /></Link>
            <Modal />
            <Link href="/dont-click-me" className="last-item-link"><FormattedMessage id="click" /></Link>
          </div>
          <div className="container-last-footer">
            <img className="logo-down" src={logoDown} alt="logo de abajo" />
            <Link to="/sitemap" className="text-of-logo-down"><FormattedMessage id="map" /></Link>
          </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Footer);

import React, { Component } from 'react'
import { Link } from 'react-router';
import './style.css';
import logo from '../../../logo.svg';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import cross from '../../../svg/cancel.svg';
import cross2 from '../../../svg/cancel2.svg';
import firebase from 'firebase';
import icon from '../../../svg/bars.svg';

function mapStateToProps(state) {
  return {
    menu: state.menu,
    color: state.colorHeader,
  }
}


  class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showElements: false,
      renderLinks: '',
      hideBar: '',
      showCross: ''
    }
    this.handleDisplayImage = this.handleDisplayImage.bind(this);
    this.handleDisplayLink = this.handleDisplayLink.bind(this);
    this.edit = this.edit.bind(this);
    this.change = this.change.bind(this);
    this.changeNo = this.changeNo.bind(this);
    this.handleLogoutWithFacebook = this.handleLogoutWithFacebook.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
    this.inverseRenderLinks = this.inverseRenderLinks.bind(this);
  }

  change() {
    this.setState({
      showElements: true
    })
  }
  changeNo() {
    this.setState({
      showElements: false
    })
  }

  handleLogoutWithFacebook() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log( `Error ${error.code} : ${error.message}`))
  }

  edit() {
    if(this.state.showElements === true) {
      return (
        <div className="container-mini-perfil">
          <img className="cross-user" src={cross} alt="tachita" onClick={this.changeNo} />
          <Link to={`account/${this.props.user.uid}`}><p className="subtitle">Checar mi cuenta</p></Link>
          <Link to="/"><p onClick={this.handleLogoutWithFacebook} className="subtitle">Salir</p></Link>
        </div>
      )
    }
  }

  handleDisplayLink() {
    if(this.props.user === null) {
      return (
        <div>
          <Link className="link" href="/login">Login</Link>
        </div>
      )
    }
  }

  handleDisplayImage() {
    if(this.props.user){
      return(
        <div className="user-content">
          <a onClick={this.edit} className="link link-img"><img onClick={this.change} className="image-user" src={this.props.user.photoURL} alt={this.props.user.displayName} /></a>
          {this.edit()}
        </div>
      )
    }
  }

  handleClick() {
    return (
      <h2 className="center">
        <img className={`bars ${this.state.hideBar}`} src={icon} alt="icono" onClick={this.renderLinks} />
        <img className={`cancel ${this.state.showCross}`} src={cross2} alt="tachita" onClick={this.inverseRenderLinks} />
    </h2>
    )
  }

  renderLinks() {
    this.setState({
      renderLinks: 'render',
      hideBar: 'hide',
      showCross: 'show'
    })
  }

  inverseRenderLinks() {
    this.setState({
      renderLinks: '',
      hideBar: '',
      showCross: ''
    })
  }

  render() {
    return (
      <div>
        <header className={`${this.props.color}`}>
          <div className={`container ${this.state.renderLinks}`}>
            <div className="logo-image">
              <img src={logo} alt="logo-superior" />
            </div>
            {this.handleDisplayImage()}
          </div>
          <div className={`container-docker ${this.state.renderLinks}`}>
            {this.handleClick()}
            <nav className={`elementos-link ${this.state.renderLinks}`}>
              <Link className="link" to="/"><FormattedMessage id="home" /></Link>
              <Link className="link" to="/contact"><FormattedMessage id="contact" /></Link>
              <Link className="link" to="/reservations"><FormattedMessage id="reservation" /></Link>
              <Link className="link" to="/about-us"><FormattedMessage id="about-us" /></Link>
              <Link className="link" to="/portafolio"><FormattedMessage id="portafolio" /></Link>
              {this.props.user && (
                <Link className="link show-link" to={`account/${this.props.user.uid}`}>Cuenta</Link>
              )}
              <Link className="link show-link" to="/portafolio">salir</Link>
              {this.handleDisplayLink()}
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Menu)

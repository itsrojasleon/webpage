import React, { Component } from 'react';
import firebase from 'firebase';
import imageFacebook from './facebookAuth.svg';
import imageGithub from './githubAuth.svg';
import './style.css';
import Menu from '../../containers/Menu/Menu.js';
import Footer from '../../containers/Footer/Footer.js';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
    this.handleAuthWithFacebook = this.handleAuthWithFacebook.bind(this)
    this.handleAuthWithGithub = this.handleAuthWithGithub.bind(this)
    this.handleLogoutWithFacebook = this.handleLogoutWithFacebook.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
  }

  // FACEBOOK
  handleAuthWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log( `Error ${error.code} : ${error.message}`))
  }
  handleLogoutWithFacebook() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log( `Error ${error.code} : ${error.message}`))
  }
// GITHUB
  handleAuthWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log( `Error ${error.code} : ${error.message}`))
  }

  renderLoginButton() {
    //Si el usuario esta loggeado
    if(this.state.user) {
      return(
        <div>
          <button onClick={this.handleLogoutWithFacebook}>Cerrar sesión</button>
          <h2>Hola {this.state.user.displayName} !</h2>
        </div>
      )
    }else{
    //si no lo está
      return(
        <div>
          <div className="container-button-facebook" onClick={this.handleAuthWithFacebook}>
            <img className="image-button-facebook" alt="facebook" src={imageFacebook} /><a className="link-login-with-facebook"> <FormattedMessage id="face" /></a>
          </div>
          <div className="container-button-github" onClick={this.handleAuthWithGithub}>
            <img className="image-button-github" src={imageGithub} alt="Github" /><a className="link-login-with-github"> <FormattedMessage id="git" /></a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Inicia sesión</title>
        </Helmet>
        <Menu user={this.state.user} />
        <div>
          {this.renderLoginButton()}
        </div>
        <Footer />
      </div>
    )
  }
}

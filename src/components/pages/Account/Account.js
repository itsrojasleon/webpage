import React, { Component } from 'react'
import Menu from '../../containers/Menu/Menu.js';
import Update from '../../containers/update/update.js';
import Footer from '../../containers/Footer/Footer.js';
import firebase from 'firebase';
import { Link } from 'react-router';
import './style.css';
import Loading from '../../containers/loading/Loading.js';
import { Helmet } from 'react-helmet';
import User from '../../containers/user/User.js';


export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  renderLoginButton() {
    //Si el usuario esta loggeado
    if(this.state.user) {
      return(
        <div>
          <h1>¡ Hola {this.state.user.displayName} !</h1>
          <button className="close-sesion" onClick={this.handleLogoutWithFacebook}>Cerrar sesión</button>
        </div>
      )
    }else{
    //si no lo está
      return(
        <div>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      )
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    });
  }

  handleLogoutWithFacebook() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log( `Error ${error.code} : ${error.message}`))
  }

  render() {
    return (
      <div>
        <Menu user={this.state.user} />
        {this.state.user && (
          <div>
            <User user={this.state.user} />
            <Update user={this.state.user} />
            <Helmet>
              <title>{this.state.user.displayName}</title>
            </Helmet>
          </div>
        )}
        {!this.state.user && (
          <Loading />
        )}
        <Footer />
      </div>
    )
  }
}

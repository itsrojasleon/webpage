import React, { Component } from 'react';
import Menu from '../../containers/Menu/Menu.js';
import Email from '../../containers/emails/Email.js';
import firebase from 'firebase';
import Footer from '../../containers/Footer/Footer.js';
import RenderLogin from '../../containers/render_login/RenderLogin.js';
import { Helmet } from 'react-helmet';

class Contact extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
  }

  render() {
    return (
      <div>
        <Menu user={this.state.user} />
        {!this.state.user && (
          <RenderLogin />
        )}
        {this.state.user && (
          <div>
            <Email user={this.state.user} />
            <Helmet>
              <title>Contacto</title>
            </Helmet>
          </div>
        )}
        <Footer />
      </div>
    )
  }
}

export default Contact;

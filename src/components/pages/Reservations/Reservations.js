import React, { Component } from 'react';
import Menu from '../../containers/Menu/Menu.js';
import Footer from '../../containers/Footer/Footer.js';
import ContainerImages from '../../containers/container_images/ContainerImages.js';
import firebase from 'firebase';
import RenderLogin from '../../containers/render_login/RenderLogin.js';
import { Helmet } from 'react-helmet';

export default class Reservations extends Component {

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
            <ContainerImages user={this.state.user} />
            <Helmet>
              <title>Reservaciones {this.state.user.displayName}</title>
            </Helmet>
          </div>
        )}
        <Footer />
      </div>
    )
  }
}

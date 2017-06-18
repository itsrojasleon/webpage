import React, { Component } from 'react';
import ContainerPortada from '../../containers/container-portada/ContainerPortada.js';
import Menu from '../../containers/Menu/Menu.js';
import Footer from '../../containers/Footer/Footer.js';
import { Helmet } from 'react-helmet';
import RenderLogin from '../../containers/render_login/RenderLogin.js';

import firebase from 'firebase';

class Portfolio extends Component {
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
        {this.state.user && (
          <div>
            <ContainerPortada user={this.state.user} />
            <Helmet>
              <title>Portafolio de webpage</title>
            </Helmet>
          </div>
        )}
        {!this.state.user && (
          <RenderLogin />
        )}
        <Footer />
      </div>
    )
  }
}
export default Portfolio;

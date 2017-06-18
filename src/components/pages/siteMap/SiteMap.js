import React, { Component } from 'react';
import Menu from '../../containers/Menu/Menu.js';
import Footer from '../../containers/Footer/Footer.js';
import firebase from 'firebase';
import './style.css';
import { Helmet } from 'react-helmet';

export default class SiteMap extends Component {
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
        <Helmet>
          <title>Mapa del sitio de webpage</title>
        </Helmet>
        <Menu user={this.state.user} />
        <div>
          <h3 className="ubication">Ubicación de nuestras oficinas</h3>
        </div>
        <div className="map-of-webpage">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.912328459751!2d-101.69434818584214!3d21.11606118595116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf9d875d30d3%3A0x394614234b7dd7fe!2sMargarita+115%2C+Loma+Bonita%2C+37420+Le%C3%B3n%2C+Gto.!5e0!3m2!1ses-419!2smx!4v1496700997416"  allowFullScreen></iframe>
        </div>
        <Footer />
      </div>
    )
  }
}

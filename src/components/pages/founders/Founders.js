
import React, { Component } from 'react';
import Menu from '../../containers/Menu/Menu.js';
import Footer from '../../containers/Footer/Footer.js';
import FoundersMap from '../../containers/founders_map/FoundersMap.js';
import firebase from 'firebase';
import './style.css';
import { Helmet } from 'react-helmet';

class Founders extends Component {
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
          <title>Fundadores de webpage</title>
        </Helmet>
        <Menu user={this.state.user} />
        <FoundersMap />
        <Footer />
      </div>
    )
  }
}
export default Founders;

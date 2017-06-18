import React, { Component } from 'react'
import Menu from '../../containers/Menu/Menu.js';
import Footer from '../../containers/Footer/Footer.js';
import RowOfApp from '../../containers/row-of-app/RowOfApp.js';
import CoverPage from '../../containers/cover_page/CoverPage.js';
import { Link } from 'react-router';
import './style.css';
import firebase from 'firebase';
import { connect } from 'react-redux';
import  { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

function mapStateToProps(state) {
  return {
    isAnimated: state.isAnimated,
    isAnimatedSpace: state.isAnimatedSpace
  }
}

class Home extends Component {

  constructor(props) {
    super(props);
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
          <title>Inicio</title>
        </Helmet>
        <Menu user={this.state.user} />
      <CoverPage />
        <div className={`container-image-city ${this.props.isAnimated}`}>
          <div className="container-text">
            <p className="text-principal"><FormattedMessage id="Indextitle" /></p>
            <p className="text-secondary"><FormattedMessage id="IndextitlePrincipalDown" /></p>
            <Link to="reservations" className="link-to-reservations"><FormattedMessage id="IndexReserve" /></Link>
          </div>
        </div>
        <RowOfApp />
        <Footer />
      </div>
    )
  }
}
export default connect(mapStateToProps)(Home);

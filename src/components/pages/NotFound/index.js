// src/components/NotFound/index.js
import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container-off-not-found">
        <Helmet>
          <title>Página no encontrada</title>
        </Helmet>
        <div className="over">
          <h2 className="h2">
            <FormattedMessage id="error" />
          </h2>
          <button><Link to="/"><FormattedMessage id="back-to-home" /></Link></button>
        </div>
      </div>
    );
  }
}

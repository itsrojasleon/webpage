import React, { Component } from 'react';
import './style.css';
import { FormattedMessage } from 'react-intl';

class CoverPage extends Component {
  render() {
    return (
      <div className="container-cover-page">
        <p className="p"><strong>Webpage</strong> <FormattedMessage id="IndextitlePrincipal" /></p>
      </div>
    )
  }
}
export default CoverPage;

import React, { Component } from 'react';
import './style.css';
import { FormattedMessage } from 'react-intl';

class RowOfApp extends Component {
  render() {
    return (
      <div>
        <h3 className="title"><FormattedMessage id="trate" /></h3>
        <div className="container-icons">
          <div className="icons-index">
            <h6 className="title-you"><FormattedMessage id="security" /></h6>
            <p  className="text-of-icons"><FormattedMessage id="all-ok" /></p>
          </div>
          <div className="icons-index">
            <h6 className="title-you"><FormattedMessage id="confident" /></h6>
            <p  className="text-of-icons"><FormattedMessage id="confident" /></p>
          </div>
          <div className="icons-index">
            <h6 className="title-you"><FormattedMessage id="primordial" /></h6>
            <p  className="text-of-icons"><FormattedMessage id="you" /></p>
          </div>
        </div>
      </div>
    )
  }
}
export default RowOfApp;

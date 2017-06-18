import React from 'react';
import { Link } from 'react-router';
import './style.css';
import { FormattedMessage } from 'react-intl';

const RenderLogin = () => {
  return (
    <div>
      <p><FormattedMessage id="sesion" /></p>
      <button className="button-render"><Link to="/login"><a className="text-link"><FormattedMessage id="start-sesion" /></a></Link></button>
    </div>
  )
}
export default RenderLogin;

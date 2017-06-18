import React from 'react';
import './style.css';
import { FormattedMessage } from 'react-intl';

export default class Email extends React.Component {

  render() {
    return (
      <div className="all">
        <div className="image-airbnb">
          <div className="contenedor-texto">
            <p className="email-text"><FormattedMessage id="questions" /></p>
          </div>
        </div>
          <form className="form" method="POST" action="http://formspree.io/webpage989@gmail.com">
            <label className="text-form-principal" for="email"><FormattedMessage id="email" /></label>
            <input className="inputs" required type="email" name="email" placeholder="Tu correo electronico" value={this.props.user.email} />
            <label for="nombre"><FormattedMessage id="name" /></label>
            <input className="inputs" required type="text" name="nombre" placeholder="Ingresa tu nombre" />
            <label for="message"><FormattedMessage id="description" /></label>
            <textarea className="inputs area" required name="message" placeholder="Escribe aquí tu mensaje"></textarea>
            <button type="submit"><FormattedMessage id="go" /></button>
          </form>
        </div>
    )
  }
}

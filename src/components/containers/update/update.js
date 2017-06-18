import React, { Component } from 'react';
import firebase from 'firebase';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import reserved from '../../../svg/reserved.svg';
import trash from '../../../svg/trash.svg';
import view from '../../../svg/search.svg';
import cancel from '../../../svg/cancel.svg';
import './style.css';
import calendar from '../../../svg/calendar.svg';
import mapLocation from '../../../svg/map-location.svg';
import one from '../../../svg/one.svg';
import cityscape from '../../../svg/cityscape.svg';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
      delete: false,
      consult: false,
      showImageUpdate: false,
      colony: null,
      number: null,
      street: null,
      date: null,
      startDate: moment(),
      isVeryGood: false
    }
    this.renderUpdate = this.renderUpdate.bind(this);
    this.handle = this.handle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
    this.handleSelectStreet = this.handleSelectStreet.bind(this);
    this.handleSelectNumber = this.handleSelectNumber.bind(this);
    this.handleSelectColony = this.handleSelectColony.bind(this);
    this.handleShowImage = this.handleShowImage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleConsult = this.handleConsult.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDeteleComplete = this.handleDeteleComplete.bind(this);
  }

  componentDidMount() {
    const date = firebase.database();
    const dbRef = date.ref(`Reservations-${this.props.user.displayName}`);
    dbRef.on('value', snap => {
      if(snap.val() != null) {
        this.setState({
          isVeryGood: true,
        })
      }
    });
  }

  handleSelectStreet(e) {
    this.setState({ street: e.target.value })
  }
  handleSelectNumber(e) {
    this.setState({ number: e.target.value })
  }
  handleSelectColony(e) {
    this.setState({ colony: e.target.value })
  }

  handleChange (date) {
    this.setState({
      startDate: date
    })
  }

  handle() {
    const db = firebase.database();
    const dbRef = db.ref(`Reservations-${this.props.user.displayName}`);
    dbRef.on('value', snap => {
      this.setState({
        date: snap.val().date,
        colony: snap.val().colony,
        number: snap.val().number,
        street: snap.val().street,
        showUpdate: true,
        delete: false,
        consult: false
      })
    });
  }

  handleDelete() {
    this.setState({
      delete: true,
      showUpdate: false,
      consult: false,
      showImageUpdate: false
    });
  }

  handleConsult() {
    const db = firebase.database();
    const dbRef = db.ref(`Reservations-${this.props.user.displayName}`);
    dbRef.on('value', snap => {
      this.setState({
        date: snap.val().date,
        colony: snap.val().colony,
        number: snap.val().number,
        street: snap.val().street,
        consult: true,
        delete: false,
        showUpdate: false,
        showImageUpdate: false
      })
    });
  }

  renderLoginButton() {
    if(this.state.isVeryGood === true) {
      return (
        <div className="container-buttons">
          <button onClick={this.handle} className="button-update"><img className="image-update" src={reserved} alt="all update" /> <FormattedMessage id="update" /></button>
          <button onClick={this.handleDelete} className="button-update"><img className="image-update" src={trash} alt="all update" /><FormattedMessage id="delete" /></button>
          <button onClick={this.handleConsult} className="button-update"><img className="image-update" src={view} alt="all update" /><FormattedMessage id="consult" /></button>
        </div>
      );
    }else{
      return (
        <div>
          <p><FormattedMessage id="no-all" /><Link to="/reservations"><FormattedMessage id="reservation" /></Link></p>
        </div>
      )
    }
  }

  renderUpdate() {
    if(this.state.showUpdate === true) {
      return (
        <div className="overlay-form active">
          <img onClick={this.closeModal} src={cancel} alt="cancelar formulario" className="cross-cancel" />
          <div className="form-update">
            <p className="text-form-update"><FormattedMessage id="form" /></p>
            <div className="container-datepicker">
            </div>
            <label className="text-update" htmlFor="calle">Calle</label>
            <input className="input-update" required onChange={this.handleSelectStreet} type="text" name="calle" value={this.state.street}></input>
            {/* Numero de la calle */}
            <label className="text-update" htmlFor="numero">Numero</label>
            <input className="input-update" required onChange={this.handleSelectNumber} type="text" name="numero" value={this.state.number}></input>
            {/* Colonia */}
            <label className="text-update" htmlFor="colonia">Colonia</label>
            <input className="input-update" required onChange={this.handleSelectColony} type="text" name="colonia" value={this.state.colony}></input>
            <button onClick={this.handleSelectDate} className="button-update-props"><FormattedMessage id="new" /></button>
          </div>
        </div>
      )
    }
  }

  closeModal() {
    this.setState({
      showUpdate: false,
      delete: false,
      consult: false,
    })
  }

  handleDeteleComplete() {
    const db = firebase.database();
    db.ref(`Reservations-${this.props.user.displayName}`).remove();
    this.setState({
      delete: false
    })
  }

  renderDelete() {
    if(this.state.delete === true) {
      return (
        <div className="overlay-delete active">
          <img onClick={this.closeModal} src={cancel} alt="cancelar formulario" className="cross-cancel" />
          <div className="modal-delete">
            <h3 className="text-title-modal"><FormattedMessage id="sure" /></h3>
            <button onClick={this.handleDeteleComplete} className="delete"><FormattedMessage id="deleteOk" /></button>
            <button onClick={this.closeModal} className="no-delete"><FormattedMessage id="cancel" /></button>
          </div>
        </div>
      )
    }
  }

  renderConsult() {
    if(this.state.consult === true) {
      return (
        <div className="overlay-consult active">
          <img onClick={this.closeModal} src={cancel} alt="cancelar formulario" className="cross-cancel" />
          <div className="super-modal-consult">
            <div className="small-box">
              <img className="icon-consult" src={calendar} alt="calendario"/><h3 className="text-icon"><FormattedMessage id="date" /> <strong>{this.state.date}</strong></h3>
            </div>
            <div className="small-box">
              <img className="icon-consult" src={mapLocation} alt="calle"/><h3 className="text-icon"><FormattedMessage id="way" /> <strong>{this.state.street}</strong></h3>
            </div>
            <div className="small-box">
              <img className="icon-consult" src={one} alt="numero de calle"/><h3 className="text-icon"><FormattedMessage id="number" />  <strong>{this.state.number}</strong></h3>
            </div>
            <div className="small-box">
              <img className="icon-consult" src={cityscape} alt="colonia" /><h3 className="text-icon"><FormattedMessage id="colony" /> <strong>{this.state.colony}</strong></h3>
            </div>
            <button onClick={this.closeModal}><FormattedMessage id="great"/></button>
          </div>
        </div>
      )
    }
  }

  handleShowImage() {
    if(this.state.showImageUpdate === true) {
      return (
        <div className="container-cool">
          <p className="cool-update"><FormattedMessage id="cool" /></p>
        </div>
      )
    }
  }

  handleSelectDate() {
    const date = firebase.database();
    const dbRef = date.ref(`Reservations-${this.props.user.displayName}`);
    dbRef.set({
      name: this.props.user.displayName,
      date: this.state.startDate.format("DD-MM-YYYY"),
      street: this.state.street,
      number: this.state.number,
      colony: this.state.colony
    });
    this.setState({
      showImageUpdate: true,
      showUpdate: false,
    })
  }

  render() {
    return (
      <div>
        {this.renderLoginButton()}
        {this.renderUpdate()}
        {this.handleShowImage()}
        {this.renderDelete()}
        {this.renderConsult()}
      </div>
    )
  }
}

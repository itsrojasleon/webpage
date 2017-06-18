import React, { Component } from 'react';
import './style.css';
import ReactStars from 'react-stars';
import firebase from 'firebase';
import { FormattedMessage } from 'react-intl';

export default class WriteDescriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: '',
      ok: null,
      mostrarDatos: true,
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    }
    this.ratingChanged = this.ratingChanged.bind(this);
    this.show = this.show.bind(this);
    this.handleGoToDescription1 = this.handleGoToDescription1.bind(this);
    this.handleSelectInput1 = this.handleSelectInput1.bind(this);
    this.showContent = this.showContent.bind(this);
  }

  ratingChanged(newRating) {
    this.setState({
      contador: newRating,
      ok: true
    });
  }

  handleSelectInput1(e) {
    this.setState({
      input1: e.target.value
    })
  }

  componentDidMount() {
    const data1 = firebase.database();
    const descriptionRef1 = data1.ref(`DescriptionShowPhone-${this.props.user.displayName}`);
    descriptionRef1.on('value', snap => {
      if(snap.val() != null) {
        this.setState({
          mostrarDatos: false,
        });
      }
    });
  }

  handleGoToDescription1() {
    const data1 = firebase.database();
    const descriptionRef1 = data1.ref(`DescriptionShowPhone-${this.props.user.displayName}`);
    descriptionRef1.set({
      calificacion: this.state.contador,
      description: this.state.input1
    });
    this.setState({
      ok: false
    })
  }

  show() {
    if(this.state.contador === 1 || this.state.contador === .5) {
      return (
        <div>
          <h2>😵</h2>
          <div className="oh-my-good">
            <label className="label-reseña" for="reseña"><FormattedMessage id="comment" /></label>
            <textarea name="reseña" className="input-submit" onChange={this.handleSelectInput1} required type="text" placeholder="Escribe aqui"></textarea>
            <button type="submit" onClick={this.handleGoToDescription1}>Califica</button>
          </div>
        </div>
      )
    }
    if(this.state.contador === 1.5 || this.state.contador === 2) {
      return (
        <div>
          <h2>😐</h2>
          <div className="oh-my-good">
            <label className="label-reseña" for="reseña"><FormattedMessage id="comment" /></label>
            <textarea name="reseña" className="input-submit" onChange={this.handleSelectInput1} required type="text" placeholder="Escribe aqui"></textarea>
            <button type="submit" onClick={this.handleGoToDescription1}>Califica</button>
          </div>
        </div>
      )
    }
    if(this.state.contador === 2.5 || this.state.contador === 3) {
      return (
        <div>
          <h2>😚</h2>
          <div className="oh-my-good">
            <label className="label-reseña" for="reseña"><FormattedMessage id="comment" /></label>
            <textarea name="reseña" className="input-submit" onChange={this.handleSelectInput1} required type="text" placeholder="Escribe aqui"></textarea>
            <button type="submit" onClick={this.handleGoToDescription1}>Califica</button>
          </div>
        </div>
      )
    }
    if(this.state.contador === 3.5 || this.state.contador === 4) {
      return (
        <div>
          <h2>😱</h2>
          <div className="oh-my-good">
            <label className="label-reseña" for="reseña"><FormattedMessage id="comment" /></label>
            <textarea name="reseña" className="input-submit" onChange={this.handleSelectInput1} required type="text" placeholder="Escribe aqui"></textarea>
            <button type="submit" onClick={this.handleGoToDescription1}>Califica</button>
          </div>
        </div>
      )
    }
    if(this.state.contador === 4.5 || this.state.contador === 5) {
      return (
        <div>
          <h2>😍</h2>
          <div className="oh-my-good">
            <label className="label-reseña" for="reseña"><FormattedMessage id="comment" /></label>
            <textarea name="reseña" className="input-submit" onChange={this.handleSelectInput1} required type="text" placeholder="Escribe aqui"></textarea>
            <button type="submit" onClick={this.handleGoToDescription1}>Califica</button>
          </div>
        </div>
      )
    }
  }

  showContent() {
    if(this.state.mostrarDatos === true) {
      return (
        <div>
          <p className="isGood"><FormattedMessage id="job-us" /></p>
          <div className="stars">
            <ReactStars
              count={5}
              className="stars"
              onChange={this.ratingChanged}
              size={50}
              color2={'#00A699'}
              color1={'#dddddd'}
            />
          </div>
        </div>
      )
    }else{
      return (
        <div>
          <p><FormattedMessage id="ready" /></p>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="container-write">
        {this.showContent()}
        {this.state.ok && (
          <h1>{this.show()}</h1>
        )}
      </div>
    )
  }
}

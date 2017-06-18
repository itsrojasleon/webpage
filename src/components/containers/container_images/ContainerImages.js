import React, { Component } from 'react';
import './style.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import firebase from 'firebase';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import cancel from '../../../svg/cancel.svg';

const ladoIzquierdo = [
  {
    src: 'https://1mmcta.bl3301.livefilestore.com/y4mlWiNLuv5prgeE7INMSXTEvJ_h5WTgM_l4yAQjSj38dI22avlpLIlXoRkIMIvgT48dLg7GLyMFsLA4W6Jv4x-Z7h1xOqU7axQuB1xwQ9lIbrtVMmOUh4TYFk_YjLn-Kvfwv44QRoXoLYvnQTXhIBJVbPcNwPHpbxhcN_AJeAU97j3VQLB_6t_H-D8f4H_9B-MNVmvLdfN1-ACi93Zugm4sw?width=236&height=236&cropmode=none',
    alt: 'imagen1',
  },
  {
    src: 'https://cdheyw.bl3301.livefilestore.com/y4mQs2QZ9mhu-NGbx9R4qjC6ZuS9PfTvCZdpDJWjwSQOpi7y0RRJH1KDDEXt4Pyif7grjfV3anrWZIag-ujTuJkSghY_jM0SpANQQgxQ2eV4IQZYxWhf63SQ3MU0LPU0Pjo67kjhVwydWbT4t6tRaQ_3Es1aOUsfawetMhixUnuk3T_vviUFYOhaPV2URTf-wcEzRJWp4NHJlSQ0b0pXBjjMA?width=236&height=213&cropmode=none',
    alt: 'imagen2',
  },
  {
    src: 'https://cdj5pw.bl3301.livefilestore.com/y4mS0TXenes0SSl2TznvFut7zlSKiQWWL36EXKkmFsX-x6XSIIqFVzCrpeQmoWIwvui8tSnP8TnFqvrvR5WWoraIJlx_GMpzDC8CWz6W_UIr7wX44wSWZjuhH6lSlCxnK2WOnCJ8TsB3E-W1igEApHCR4fu4UF-d9R2xi1eDWxkKU7D2E4AUznzIKZIzCUnPH6yLs0JCqtdANvgVTO18sABaA?width=236&height=236&cropmode=none',
    alt: 'imagen3',
  },
  {
    src: 'https://1mpfgw.bl3301.livefilestore.com/y4m4C8nJQ6MNRXnivEtZ2kUsdpm-MntnzpL1u29hPPcIb9QYZVoYllttcSKm1Tvut63f1QrH4GUplp3Pf7zZki0dVl13owTU8JNH-FfMo710Q_4HMcpJ95TMJLeMQ0mnQq4ZflR8GsDfqwX1A045BPuF1PjIKHbpzCbNNRUgsE71ZStFwlUIcnug3TQrTw1j2rQ3GKDczzYNPg4JTTF05Jo_Q?width=236&height=92&cropmode=none',
    alt: 'imagen4',
  },
  {
    src: 'https://1mn6pa.bl3301.livefilestore.com/y4m0nR4CgA04xfhcyOEceGdwAxTcz6aYcVFStqL9Q0g0hc28f99DOnUHJBX_MiB0VhdPa-EZlZbeI9-J0Nk2ys0TUTLsEpRFdALYDiQAy0QvQDSsX8o4UhfI4jF_8YfPMpM98W3SfTQDQDsiyb-L3iP137cGALAsitReXqMQp6fTXdZrd0NPJcwH39fcNsczj53PqFHORH0P9Q4Dw_zgTAVUw?width=236&height=145&cropmode=none',
    alt: 'imagen5',
  },
]

const ladoDerecho = [
  {
    src: 'https://1mobpw.bl3301.livefilestore.com/y4mK6vECcdkggWErWomhfzKIaGNmtUQMmNqulH08ifnY5s54SxDHmQ4FZh6A1CHoVONXuaeQg6I03qgDKNn_FK-ZdeA9eQXNFv8dfx-X4rb9Z0-UAv9_equC31NRHKRVe75aQZ_oqaZOhnFRNi6ESzwMkCICTzoqeNRapQa_5zOPLWbN8aB3Cz-D1ysMgjzxWI4ziQP25cJPEjgv3ZWh8PIgQ?width=236&height=236&cropmode=none',
    alt: 'imagen6',
  },
  {
    src: 'https://1mnlvg.bl3301.livefilestore.com/y4mZloH2f1w8qUhMA6OKc6-0E6J2heDdb1kAI5s3BFtDVHzuAdp7tgGtfF-fgXLE2zf19DGEVgGfA3NC5UmF11xwDeJHA7BqaVvOFCIbeGnHWjroTuZfGJ_OWpZVl8btrPCVzP3W_RjOhSOS3OwXpxbUcHdJxysGtIPFskdHiDnWzIXZWTccU2a4Ieb8ZGhW7Q_ew65JMzP4wlKwxuIqiLm-Q?width=236&height=236&cropmode=none',
    alt: 'imagen7',
  },
  {
    src: 'https://1mpteq.bl3301.livefilestore.com/y4mS_Z2lRLz2FftPgu7QzP7dQWQ2e5oaX386JUx8Xq_gxFDd-Sor7Q0FoTKKnGQk2NTP9H2Pusj2bDMYP610Gll75Opwgu51B_9f0Dtp9mxC3cmh9BbI-Wp7wN7CL__-dtjo3EGdX-AQX6N0palYSVmVo58FMxWOce_2LgVciRZtcFoCSMlT1p9wvVUrBEPKii-KPRbKgo2K-TigzY9G3f7fw?width=236&height=236&cropmode=none',
    alt: 'imagen8',
  },
  {
    src: 'https://1moihg.bl3301.livefilestore.com/y4mWCFF8_eBs2GxGZeZpWSWE1ZwU-VN92WYqDwhEVzZECi11oP1yMXNO31FO3PEUHTFmGH5TjnimHEclLmRbL_LZiX_aa_xiMlwTJilx9_IzOYB9ywygsBw1XS2O6UH4kem6N_elBchfnLr2iLFRjMXGitV2LqjgdpBVRxNu--ScryYz6BxImdYL73v120iAnc6s6prMaIgFXqIgtxN9_07zg?width=181&height=256&cropmode=none',
    alt: 'imagen9',
  },
  {
    src: 'https://1mpmyg.bl3301.livefilestore.com/y4mENDqqTEm9b9w0GVTUmHCObc_uZxPLNl_mo5qoRvpVAgvqNkaAcKWcfEiTvvmZDtC7ubOF6vm-1l4Hu2a8aX5rtA72pNnliW_BxzNjXCgEzLtey4GBqsh_kcsHdm9WlG-pF-CwXU-HHH-QDvniCZ9hTT_AzZurrR0drRZMO7Bavi0zz45ZbbfRl05jyfupl3y5ipqcoHM80yNQzYaB5R-7A?width=236&height=237&cropmode=none',
    alt: 'imagen10',
  }
]
export default class ContainerImages extends Component {

  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      startDate2: moment(),
      startDate3: moment(),
      startDate4: moment(),
      startDate5: moment(),
      street: '',
      number: '',
      colony: '',
      isRegistred: false,
      renderDates: false,
      renderForm1: false,
      renderForm2: false,
      renderForm3: false,
      renderForm4: false,
      renderForm5: false,
      renderButton: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectDate1 = this.handleSelectDate1.bind(this);
    this.handleSelectDate2 = this.handleSelectDate2.bind(this);
    this.handleSelectDate3 = this.handleSelectDate3.bind(this);
    this.handleSelectDate4 = this.handleSelectDate4.bind(this);
    this.handleSelectDate5 = this.handleSelectDate5.bind(this);
    this.handleSelectStreet = this.handleSelectStreet.bind(this);
    this.handleSelectNumber = this.handleSelectNumber.bind(this);
    this.handleSelectColony = this.handleSelectColony.bind(this);
    this.handleShowAllDate = this.handleShowAllDate.bind(this);
    this.buttonRenderDates = this.buttonRenderDates.bind(this);
    this.firebaseDate = this.firebaseDate.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.changeNo = this.changeNo.bind(this);
    this.handleFirebaseSaved = this.handleFirebaseSaved.bind(this);
    this.renderDataUser1 = this.renderDataUser1.bind(this);
    this.renderDataUser2 = this.renderDataUser2.bind(this);
    this.renderDataUser3 = this.renderDataUser3.bind(this);
    this.renderDataUser4 = this.renderDataUser4.bind(this);
    this.renderDataUser5 = this.renderDataUser5.bind(this);
    this.verifyDataUser1 = this.verifyDataUser1.bind(this);
    this.verifyDataUser2 = this.verifyDataUser2.bind(this);
    this.verifyDataUser3 = this.verifyDataUser3.bind(this);
    this.verifyDataUser4 = this.verifyDataUser4.bind(this);
    this.verifyDataUser5 = this.verifyDataUser5.bind(this);
  }

  handleChange (date) {
    this.setState({
      startDate: date,
      startDate2: date,
      startDate3: date,
      startDate4: date,
      startDate5: date,
    })
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

  changeNo() {
    this.setState({
      renderDates: false
    });
  }

  verifyDataUser1() {
    this.setState({
      renderForm1: true,
      renderDates: false,
      renderButton: true
    });
  }
  verifyDataUser2() {
    this.setState({
      renderForm2: true,
      renderDates: false,
      renderButton: true
    });
  }
  verifyDataUser3() {
    this.setState({
      renderForm3: true,
      renderDates: false,
      renderButton: true
    });
  }
  verifyDataUser4() {
    this.setState({
      renderForm4: true,
      renderDates: false,
      renderButton: true
    });
  }
  verifyDataUser5() {
    this.setState({
      renderForm5: true,
      renderDates: false,
      renderButton: true
    });
  }

  renderDataUser1() {
    if(this.state.renderForm1 === true) {
      return (
        <div className="form-data-user">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            disabled={true}
            dateFormat="DD/MM/YYYY"
          />
          <label htmlFor="calle">Calle</label>
          <input required onChange={this.handleSelectStreet} type="text" name="calle"></input>
          {/* Numero de la calle */}
          <label htmlFor="numero">Numero</label>
          <input required onChange={this.handleSelectNumber} type="text" name="numero"></input>
          {/* Colonia */}
          <label htmlFor="colonia">Colonia</label>
          <input required onChange={this.handleSelectColony} type="text" name="colonia"></input>
          <button onClick={this.handleSelectDate1} className="button-super-ok">Finalizar reservación</button>
        </div>
      )
    }
  }
  renderDataUser2() {
    if(this.state.renderForm2 === true) {
      return (
        <div className="form-data-user">
          <DatePicker
            selected={this.state.startDate2}
            onChange={this.handleChange}
            disabled={true}
            dateFormat="DD/MM/YYYY"
          />
          <label htmlFor="calle">Calle</label>
          <input required onChange={this.handleSelectStreet} type="text" name="calle"></input>
          {/* Numero de la calle */}
          <label htmlFor="numero">Numero</label>
          <input required onChange={this.handleSelectNumber} type="text" name="numero"></input>
          {/* Colonia */}
          <label htmlFor="colonia">Colonia</label>
          <input required onChange={this.handleSelectColony} type="text" name="colonia"></input>
          <button onClick={this.handleSelectDate2} className="button-super-ok">Finalizar reservación</button>
        </div>
      )
    }
  }
  renderDataUser3() {
    if(this.state.renderForm3 === true) {
      return (
        <div className="form-data-user">
          <DatePicker
            selected={this.state.startDate3}
            onChange={this.handleChange}
            disabled={true}
            dateFormat="DD/MM/YYYY"
          />
          <label htmlFor="calle">Calle</label>
          <input required onChange={this.handleSelectStreet} type="text" name="calle"></input>
          {/* Numero de la calle */}
          <label htmlFor="numero">Numero</label>
          <input required onChange={this.handleSelectNumber} type="text" name="numero"></input>
          {/* Colonia */}
          <label htmlFor="colonia">Colonia</label>
          <input required onChange={this.handleSelectColony} type="text" name="colonia"></input>
          <button onClick={this.handleSelectDate3} className="button-super-ok">Finalizar reservación</button>
        </div>
      )
    }
  }
  renderDataUser4() {
    if(this.state.renderForm4 === true) {
      return (
        <div className="form-data-user">
          <DatePicker
            selected={this.state.startDate4}
            onChange={this.handleChange}
            disabled={true}
            dateFormat="DD/MM/YYYY"
          />
          <label htmlFor="calle">Calle</label>
          <input required onChange={this.handleSelectStreet} type="text" name="calle"></input>
          {/* Numero de la calle */}
          <label htmlFor="numero">Numero</label>
          <input required onChange={this.handleSelectNumber} type="text" name="numero"></input>
          {/* Colonia */}
          <label htmlFor="colonia">Colonia</label>
          <input required onChange={this.handleSelectColony} type="text" name="colonia"></input>
          <button onClick={this.handleSelectDate4} className="button-super-ok">Finalizar reservación</button>
        </div>
      )
    }
  }
  renderDataUser5() {
    if(this.state.renderForm5 === true) {
      return (
        <div className="form-data-user">
          <DatePicker
            selected={this.state.startDate5}
            onChange={this.handleChange}
            disabled={true}
            dateFormat="DD/MM/YYYY"
          />
          <label htmlFor="calle">Calle</label>
          <input required onChange={this.handleSelectStreet} type="text" name="calle"></input>
          {/* Numero de la calle */}
          <label htmlFor="numero">Numero</label>
          <input required onChange={this.handleSelectNumber} type="text" name="numero"></input>
          {/* Colonia */}
          <label htmlFor="colonia">Colonia</label>
          <input required onChange={this.handleSelectColony} type="text" name="colonia"></input>
          <button onClick={this.handleSelectDate5} className="button-super-ok">Finalizar reservación</button>
        </div>
      )
    }
  }


  handleFirebaseSaved() {
    const data1 = firebase.database();
    const descriptionRef1 = data1.ref(`Reservations-${this.props.user.displayName}`);
    descriptionRef1.set({

    });
  }

  handleShowAllDate() {
    if(this.state.renderDates === true) {
      return (
        <div className="overlay active form-reservation">
          <h3>Estos son nuestros horarios</h3>
          <img onClick={this.changeNo} className="cross crossModal" src={cancel} alt="cross" />
          <div className="modal-dates">
            <div className="date-map">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                disabled={true}
                dateFormat="DD/MM/YYYY"
              />
              <button onClick={this.verifyDataUser1} className="reservation">Reservar</button>
            </div>
            <div className="date-map">
              <DatePicker
                selected={this.state.startDate2.add(1, "days")}
                onChange={this.handleChange}
                disabled={true}
                dateFormat="DD/MM/YYYY"
              />
              <button onClick={this.verifyDataUser2} className="reservation">Reservar</button>
            </div>
            <div className="date-map">
              <DatePicker
                selected={this.state.startDate3.add(2, "days")}
                onChange={this.handleChange}
                disabled={true}
                dateFormat="DD/MM/YYYY"
              />
              <button onClick={this.verifyDataUser3} className="reservation">Reservar</button>
            </div>
            <div className="date-map">
              <DatePicker
                selected={this.state.startDate4.add(3, "days")}
                onChange={this.handleChange}
                disabled={true}
                dateFormat="DD/MM/YYYY"
              />
              <button onClick={this.verifyDataUser4} className="reservation">Reservar</button>
            </div>
            <div className="date-map">
              <DatePicker
                selected={this.state.startDate5.add(4, "days")}
                onChange={this.handleChange}
                disabled={true}
                dateFormat="DD/MM/YYYY"
              />
              <button onClick={this.verifyDataUser5} className="reservation">Reservar</button>
            </div>
          </div>
        </div>
      )
    }
  }

  firebaseDate() {
    if(this.state.isRegistred === true) {
      return (
        <div>
          <h2><FormattedMessage id="ReservationOk" /></h2>
          <p><FormattedMessage id="ReservationHere" /> <Link to={`user/${this.props.user.uid}`}><strong>Aquí</strong></Link></p>
        </div>
      )
    }
  }

  handleSelectDate1() {
    const date = firebase.database();
    const reservationRef = date.ref(`Reservations-${this.props.user.displayName}`);
    reservationRef.set({
      name: this.props.user.displayName,
      date: this.state.startDate.format("DD-MM-YYYY"),
      street: this.state.street,
      number: this.state.number,
      colony: this.state.colony
    });
    this.setState({
      renderForm1: false,
    });
  }
  handleSelectDate2() {
    const date = firebase.database();
    const reservationRef = date.ref(`Reservations-${this.props.user.displayName}`);
    reservationRef.set({
      name: this.props.user.displayName,
      date: this.state.startDate2.format("DD-MM-YYYY"),
      street: this.state.street,
      number: this.state.number,
      colony: this.state.colony
    });
    this.setState({
      renderForm2: false,
    });
  }
  handleSelectDate3() {
    const date = firebase.database();
    const reservationRef = date.ref(`Reservations-${this.props.user.displayName}`);
    reservationRef.set({
      name: this.props.user.displayName,
      date: this.state.startDate3.format("DD-MM-YYYY"),
      street: this.state.street,
      number: this.state.number,
      colony: this.state.colony
    });
    this.setState({
      renderForm3: false,
    });
  }
  handleSelectDate4() {
    const date = firebase.database();
    const reservationRef = date.ref(`Reservations-${this.props.user.displayName}`);
    reservationRef.set({
      name: this.props.user.displayName,
      date: this.state.startDate4.format("DD-MM-YYYY"),
      street: this.state.street,
      number: this.state.number,
      colony: this.state.colony
    });
    this.setState({
      renderForm4: false,
    });
  }
  handleSelectDate5() {
    const date = firebase.database();
    const reservationRef = date.ref(`Reservations-${this.props.user.displayName}`);
    reservationRef.set({
      name: this.props.user.displayName,
      date: this.state.startDate5.format("DD-MM-YYYY"),
      street: this.state.street,
      number: this.state.number,
      colony: this.state.colony
    });
    this.setState({
      renderForm5: false,
    });
  }

  buttonRenderDates() {
    this.setState({
      renderDates: true,
    });
  }

  componentDidMount() {
    const date = firebase.database();
    const dbRef = date.ref(`Reservations-${this.props.user.displayName}`);
    dbRef.on('value', snap => {
      if(snap.val() != null) {
        this.setState({
          isRegistred: true,
        });
      }
    });
  }

  handleButton() {
    if(this.state.renderButton === false && this.state.isRegistred === false) {
      return (
        <button onClick={this.buttonRenderDates}>Ver fechas disponibles</button>
      )
    }else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="super-container-off-images">
        <div className="container-left">
          {
            ladoIzquierdo.map((izquierdo) => {
              return (
                <div key={izquierdo.src} className="container-simple-image">
                  <img alt={izquierdo.alt} className="image-size" src={izquierdo.src} />
                </div>
              )
            })
          }
        </div>

        <div className="container-all">
            <div className="container-datepicker">
              {!this.state.isRegistred && (
                <p className="text-principal"><FormattedMessage id="ReservationTitle" /></p>
              )}
              {this.handleShowAllDate()}
              {this.renderDataUser1()}
              {this.renderDataUser2()}
              {this.renderDataUser3()}
              {this.renderDataUser4()}
              {this.renderDataUser5()}
              {this.handleButton()}

            </div>
          {this.firebaseDate()}
        </div>

        <div className="container-right">
          {
            ladoDerecho.map((derecho) => {
              return (
                <div key={derecho.src} className="container-simple-image">
                  <img alt={derecho.alt} className="image-size" src={derecho.src} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

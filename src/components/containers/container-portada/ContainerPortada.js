import React, { Component } from 'react';
import './style.css';
import WriteDescriptions from '../write_descriptions/WriteDescriptions.js';
import WriteDescriptions2 from '../write_descriptions/WriteDescriptions2.js';
import WriteDescriptions3 from '../write_descriptions/WriteDescriptions3.js';
import { FormattedMessage } from 'react-intl';

class ContainerPortada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnter: '',
      mouseLeave: ''
    }
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({
      mouseEnter: 'enter',
    })
  }

  mouseLeave() {
    this.setState({
      mouseEnter: '',
    })
  }

  render() {
    return (
      <div className="super-container-portada">
        <div className="container-portada">
          <div className="portada">
            <a href="https://rojasleonjuanluis.github.io/photo-show/" target="_blank"><div className="animation"><img className="image-map" src="https://bpyhbw-bn1305.files.1drv.com/y4m9Ge2_jQKzPNha5PRuCWJikpcjpL8Sz4KFT1XzBo9p5xFC8BOhysrqbXPWk_m6A-MvTn4pcLzRonRqUro111POYTYtWgZgHDQFHPHt9qz6SYnmo7TPGLn4KRy7SYjrGYvferntBPgVSVlCzuqkcTjks7OF_aPc7Rfpf78pvkzQH-C65jhQNBJ98XmzhMyI4_zuMX9nqr20az6lY_KL06aZQ?width=689&height=394&cropmode=none" alt="1" /></div></a>
            <p><FormattedMessage id="fotografo" /></p>
            <WriteDescriptions user={this.props.user} />
          </div>
          <div className="portada">
            <a href="https://rojasleonjuanluis.github.io/show-phone/" target="_blank"><div className="animation"><img className="image-map numero1" src="https://aqyhbw-bn1305.files.1drv.com/y4mR3GzWEWAArHokJwpLPJPdnpdOP-ZKH8AJago9qBbLmB9Uo9FNihbOCavm8iAiUuR7ww8-jU9eNFrLov0kFm7N6oLU9M4Xn2N3YDf2_YCJ2yMjRL4QvXYKeKkCPi7m6DJ7sGCtB6xk2BVRpWiXKuEMWH8q-ILIZobxytF338YRD9NASKx3wjqNRi9e8JQAOpkg-XzK2aHYkc0NB-iofM6uw?width=558&height=375&cropmode=none" alt="2" /></div></a>
            <p><FormattedMessage id="cites" /></p>
            <WriteDescriptions2 user={this.props.user} />
          </div>
          <div className="portada">
            <a href="https://rojasleonjuanluis.github.io/cites/" target="_blank"><div className="animation"><img className="image-map numero2" src="https://9vuhbw-bn1305.files.1drv.com/y4md8K1Xxji3z9XJWHyrshPRr_V8qMEGmXi2L27ScsL0Aw6_DfGCWI287AbpneEbtkzzGXmGF4X-w3VIR6o91In3SO2SGf30krLJMJYcWpY_hWoy7kPhnHNxu3ib4WxVmPKNFhoktOkO46Xr8H2H_b0WeqeweRAhe9L-igbLbTUHcN2Zf0Ne5iBNRjiOzdFXtU94_CMPx6H6GrIITkuO2aBig?width=281&height=198&cropmode=none" alt="3" /></div></a>
            <p><FormattedMessage id="phones" /></p>
            <WriteDescriptions3 user={this.props.user} />
          </div>
        </div>
      </div>
    )
  }
}
export default ContainerPortada;

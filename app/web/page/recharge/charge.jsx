import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import MobileScan from 'component/recharge/mobilescan.jsx';
import ChargeAction from 'component/recharge/chargeAction.jsx';
import ChargeInput from 'component/recharge/chargeInput.jsx';
import ChargeSuccess from 'component/recharge/chargeSuccess.jsx';
import './charge.css';

export default class Charge extends Component {
  

  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <MobileScan/>
      <Footer></Footer>
    </div>;
  }
}
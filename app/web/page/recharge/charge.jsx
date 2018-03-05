import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import MobileScan from 'component/recharge/mobilescan.jsx';
import ChargeAction from 'component/recharge/chargeAction.jsx';
import ChargeInput from 'component/recharge/chargeInput.jsx';
import './charge.css';

export default class Charge extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }

  componentWillMount() {
  	console.log('----componentWillMount------');
  }

  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <MobileScan/>
      <Footer></Footer>
    </div>;
  }
}
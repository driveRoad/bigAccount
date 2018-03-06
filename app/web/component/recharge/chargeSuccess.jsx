import React, { Component } from 'react';
import BottomBanner from '../../asset/images/recharge/tuiBanner.png';
import './chargeSuccess.css'

export default class ChargeSuccess extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="charge-success-container">
        <div className="charge-success-card">
          <div className="top-section">
            <p className="success-tint">您已成功充值1000.0元!</p>
            <div className="check-account"><p>查看我的账户</p></div>
          </div>
          <img src={BottomBanner} alt="charge-seccess"/>
        </div>
      </div>
    )
  }

}
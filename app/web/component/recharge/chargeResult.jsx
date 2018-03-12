import React, {Component} from 'react';
import BottomBanner from '../../asset/images/recharge/tuiBanner.png';
import './chargeResult.css'

export default class ChargeResult extends Component {
  constructor(props) {
    super(props);
    this.onCheckAccount = this.onCheckAccount.bind(this);
  }


  onCheckAccount() {
    console.log('点击查看账户');
  }

  render() {
    return (
      <div className="charge-result-container">
        <div className="charge-result-card">
          <div className="top-section">
            <p className="result-tint">您已成功充值1000.0元!</p>

            <button type="button" className="check-account" onClick={this.onCheckAccount}>查看我的账户</button>
          </div>
          <img src={BottomBanner} alt="charge-result"/>
        </div>
      </div>
    )
  }

}
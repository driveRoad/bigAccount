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

  getResultTint() {
    console.log('result = ' + this.props.result);
    if(this.props.result == "S") {
      return <p className="result-tint">您已成功充值xxxx元!</p>;
    } else if (this.props.result == 'F') {
        return <p className="result-tint">充值失败。。。</p>
    } else {
        return <p className="result-tint">等待中。。。</p>
    }
  }
  render() {
    return (
      <div className="charge-result-container">
        <div className="charge-result-card">
          <div className="top-section">
              {
                this.getResultTint()
              }


            <button type="button" className="check-account" onClick={this.onCheckAccount}>查看我的账户</button>
          </div>
          <img src={BottomBanner} alt="charge-result"/>
        </div>
      </div>
    )
  }

}
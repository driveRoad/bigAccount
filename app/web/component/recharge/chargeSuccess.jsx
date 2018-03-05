import React, { Component } from 'react';
import BottomBanner from '../../asset/images/recharge/tuiBanner.png';
export default class Mobilescan extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className='charge-action-container'>
      <div className='charge-success-page'>
        <div className='success-content'>
          <div className="success-tip">
            <p>您已成功充值1000.00元!</p>
            <div className="check-account">
              <span>查看我的账户</span>
            </div>
          </div>
          <div>
            <img src={BottomBanner}/>
          </div>
        </div>
      </div>
    </div>;
  }
}
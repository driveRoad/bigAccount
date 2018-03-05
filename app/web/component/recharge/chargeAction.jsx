import React, { Component } from 'react';
import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import ChargeTotal from '../../asset/images/recharge/chargeTotal.png';
import User from '../../asset/images/recharge/user.png';
import './chargeAction.css';


export default class ChargeAction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="charge-action-container">
      <div className="charge-show">
        <section>
          <img src={BootomWen}/>
          <div className="user">
            <img src={User}/>
            <span>张三</span>
            <span>账户 186***3242</span>
            <span>退出</span>
          </div>
        </section>
        <section>
          <div className="charge-notice">
            <span className="charge-left">
              <img src={Charge}/><span>账户余额</span>
              <div className="charge-nummber">
                1000 元
              </div>
            </span>
            <span className="charge-total">
              <img src={ChargeTotal}/><span>账户总资产</span>
              <div className="charge-nummber">
                1000 元
              </div>
            </span>
          </div>
          <div className="recharge-action">
            <span>立即充值</span>
          </div>
          <div className="bottom-pic">
            <img src={Bootom}/>
          </div>
        </section>
      </div>
      <div className="recharge-action">
        <span>立即充值</span>
      </div>
    </div>;
  }
}
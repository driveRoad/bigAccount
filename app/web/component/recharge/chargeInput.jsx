import React, { Component } from 'react';
import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import User from '../../asset/images/recharge/user.png';
import Input from '../../component/common/input/input.jsx';
import './chargeAction.css';

 class ChargeInput extends Component {
  constructor(props) {
    super(props);
    this.options = {
      width: 460,
      height:60,
      placeHolder:'请输入充值金额',
      borderColor:'',
      errorMessage: '您的输入不合法，请输入数字'
    }
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
              <img src={Charge}/><span>充值金额</span>
            </span>
          </div>
          <div className="charge-input">
            <Input options={this.options}/>
          </div>
          <div className="recharge-action">
            <span>下一步</span>
          </div>
          <div className="bottom-pic">
            <img src={Bootom}/>
          </div>
        </section>
      </div>
    </div>;
  }
}

export default ChargeInput;
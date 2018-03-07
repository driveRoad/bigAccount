import React, { Component } from 'react';
import User from '../../asset/images/recharge/user.png';
import BootomWen from '../../asset/images/recharge/bottomwen2.png';
import './chargeHelp.css'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.bgImageStyle = {
      backgroundImage: `url(${BootomWen})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center center'
    }
  }
  render() {
    return <div className="user-info" style={this.bgImageStyle}>
      <div className="user-image">
        <img src={User}/>
      </div>
      <div className="info">
        <p>欢迎回来，张三</p>
        <p>账户 186***3242</p>
        <p>退出</p>
      </div>
    </div>
  }
}



class ChargeHelp extends Component {
  
  render() {
    return <div className="charge-action-container charge-help-container">
    <div className="charge-help">
      <UserInfo/>
      <div className="charge-question">
        <section className="section-one">
          <div className="question-title">
            <p>充值遇到问题</p>
          </div>
          <div className="question-content">
            <p>如需查询充值记录，请打开大账户，进入我的/资金记录中查看</p>
            <p>查看我的账户</p>
          </div>
        </section>
        <section className="section-two">
          <div className="question-title">
            <p>充值问题说明</p>
          </div>
          <ul className="question-content">
            <li><span></span>请留意您的浏览器对银联和各家银行网银的拦截</li>
            <li><span></span>请确认您的银行卡已经开通网银支付功能</li>
            <li><span></span>请注意您的网银支付额度限制，以免造成不便</li>
            <li><span></span>如果充值金额没有及时到账，请于客服联系400-100-6699</li>
          </ul>
        </section>
        
      </div>
    </div>
    </div>;
  }
}

export default ChargeHelp;
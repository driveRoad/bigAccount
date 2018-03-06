import React, { Component } from 'react';
import Qrcode from '../../asset/images/accountload.png';
export default class Mobilescan extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <div className="charge-online">
        <div className="charge-online-content">
          <section>
            <div className="tip">
              用<span>大账户</span>扫描二维码使用
            </div>
          </section>
          <section>
            <div className="qrcode">
              <img src={Qrcode}/>
              <span>步骤</span>
            </div>
          </section>
          <section>
            <div className="sign-up">
              <div><span className="order">1</span>  登陆手机大账户</div>
              <div className="install-sign-up">手机上<span>安装</span>并登陆大账户</div>
            </div>
            <div className="scan">
              <div><span className="order">2</span> 进入扫一扫</div>
              <div className="install-sign-up">从<span>“钱包”</span>，进入“扫一扫”，扫码登陆后即可充值</div>
            </div>
          </section>
          <section>
          
          </section>
          <section>
            <p>建议使用IE浏览器进行充值</p>
            <p>请留意您的浏览器对银联和各家银行网银的拦截</p>
          </section>
        </div>
      </div>      
    </div>;
  }
}
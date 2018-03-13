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
    this.state = {
      userInfo: {
        userName: '',
        userAccount: '',
        userExtraMoney: '',
        userTotalMoney:''
      }
    };

    this.exitAccount = this.exitAccount.bind(this);
    
  }

  componentDidMount() {
    //根据sessionId获取用户登陆信息,首先从localStorage上获取，如果localStorage没有，再从服务端获取
    let sessionId = window.localStorage.getItem('sessionId');
    if(sessionId) {
      let userInfoLocal = JSON.parse(window.localStorage.getItem('userInfo'));
      if(userInfoLocal && userInfoLocal.userName) {
        this.setState({
          userInfo: {
            userName: userInfoLocal.userName,
            userAccount: userInfoLocal.userAccount
          }
        })
      } else {
        console.log('fetch');
        this.getUserInfo(sessionId);
      }
    }
  }


  /**
   * 
   * @param {*} sessionId 
   * 1.首先判断当前是否有用户登陆
   * 2.若已经登陆，根据sessionId获取获取userInfo
   * 3.若未登陆，则跳转到扫码页面
   * 4.获取到的userInfo存放到localStorage和当前组件对象中
   */
  getUserInfo(sessionId) {
    if(!sessionId) {
      window.location.href='/recharge/mobileScan.html';
      return;
    }

    let url = 'http://craxhome.ddns.net:11100/mock/11/api/v2/client/account/detail/total';
    fetch(url,
      {headers: new Headers({
        "Accept": 'application/json',
        "Origin": '*',
        "Access-Control-Allow-Origin": '*'
      }),
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then((res) => {
      //获取到的用户对象
      this.setState({
        userInfo: {
          userName: res.cname,
          userAccount: res.vname,
          userExtraMoney: res.fixed_asset.normal.total_amount,
          userTotalMoney: res.fixed_asset.normal.total_amount
        }
      })
    })
  }

  exitAccount() {
    let exitUrl = 'http://craxhome.ddns.net:11100/mock/11/api/v1/client/sessions';
    fetch(exitUrl,
      {headers: new Headers({
        "Accept": 'application/json',
        "Origin": '*',
        "Access-Control-Allow-Origin": '*'
      }),
      method: 'delete'
    }).then(() => {
      window.localStorage.removeItem('sessionId');
      window.localStorage.removeItem('userInfo');
      window.location.href='mobileScan.html';
    })
  }

  render() {
    return <div className="user-info" style={this.bgImageStyle}>
      <div className="user-image">
        <img src={User}/>
      </div>
      <div className="info">
        <p>欢迎回来，{this.state.userInfo.userName}</p>
        <p>账户 {this.state.userInfo.userAccount}</p>
        <p className="exit" onClick={this.exitAccount}>退出</p>
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
            <p><a href='/recharge/chargeAction.html'>查看我的账户</a></p>
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
/**
 * @author zll 2017/3/13
 */
import React, { Component } from 'react';
import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import ChargeTotal from '../../asset/images/recharge/chargeTotal.png';
import User from '../../asset/images/recharge/user.png';
import UrlManage from '../../util/urlManage.js';
import './chargeAction.css';



export default class ChargeAction extends Component {
  constructor(props) {
    super(props);
    this.chargeNow = this.chargeNow.bind(this);
    this.exitAccount = this.exitAccount.bind(this);
    this.state = {
      modalIsOpen: false,
      userInfo: {
        userName: '',
        userAccount: '',
        userExtraMoney: '',
        userTotalMoney:''
      }
    };
  }

  componentDidMount() {
    let sessionId = window.localStorage.getItem('sessionId');
    this.getUserInfo(sessionId);
  }

  /** 
   * 点击立即充值，跳转到充值页面
  */
  chargeNow() {
    window.location.href = '/recharge/chargeInput.html';
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
    fetch(UrlManage.USERINFOURL,
      {headers: new Headers(
        Object.assign({},UrlManage.REQUESTHEADER,{"OA-TOKEN":sessionId})
      ),
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then((res) => {
      //获取到的用户对象
      this.setState({
        userInfo: {
          userName: res.vname,
          userAccount: res.phone,
          userExtraMoney: res.cache.balance,
          userTotalMoney: res.cache.total_amount + res.fixed_asset.normal.total_amount
        }
      })
    })
  }


  //退出当前用户
  exitAccount() {
    let sessionId = window.localStorage.getItem('sessionId');
    fetch(UrlManage.EXITLOGINURL,
      {headers: new Headers(
        Object.assign({},UrlManage.REQUESTHEADER,{"OA-TOKEN":sessionId})
      ),
      method: 'delete'
    }).then(() => {
      window.localStorage.removeItem('sessionId');
      window.localStorage.removeItem('userInfo');
      window.location.href='mobileScan.html';
    })
  }


  render() {
    return <div className="charge-action-container">
      <div className="charge-show">
        <section>
          <img src={BootomWen}/>
          <div className="user">
            <img src={User}/>
            <span>{this.state.userInfo.userName}</span>
            <span>账户 {this.state.userInfo.userAccount}</span>
            <span className="exit" onClick={this.exitAccount}>退出</span>
          </div>
        </section>
        <section>
          <div className="charge-notice">
            <span className="charge-left">
              <img src={Charge}/><span>账户余额</span>
              <div className="charge-nummber">
                {this.state.userInfo.userExtraMoney} 元
              </div>
            </span>
            <span className="charge-total">
              <img src={ChargeTotal}/><span>账户总资产</span>
              <div className="charge-nummber">
                {this.state.userInfo.userTotalMoney} 元
              </div>
            </span>
          </div>
          <div className="recharge-action">
            <span className="charge-now" onClick={this.chargeNow}>立即充值</span>
          </div>
          <div className="bottom-pic">
            <img src={Bootom}/>
          </div>
        </section>
      </div>
    </div>;
  }
}
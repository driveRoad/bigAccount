/**
 * @author zll 2018/3/13
 */
import React, { Component } from 'react';
import Qrcode from '../../asset/images/accountload.png';
import UrlManage from '../../util/urlManage.js';

export default class Mobilescan extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.getLoginQrcode = this.getLoginQrcode.bind(this);
    this.generateQrcode = this.generateQrcode.bind(this); 
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.handleLogin(false);
  }

  handleLogin(resetFlag) {
    let qrcodeMaker = require('jquery-qrcode');
    let $ =  require('jquery');
    if(resetFlag) {
      $('.refresh').hide('fast');
      $('.install-qrcode canvas').remove();
    }
    this.getLoginQrcode(qrcodeMaker,$);
  }

  //获取登陆二维码
  getLoginQrcode(qrcodeMaker,$) {
    fetch(UrlManage.QRCODETOKENURL,{
      headers: new Headers(
        UrlManage.REQUESTHEADER
      ),
      method: 'get'
    }).then((res) => {
      return res.json();
    }).then((res => {
      if(res.token) {

        let token = res.token;
        //生成二维码
        this.generateQrcode(qrcodeMaker,$,token); 
        
        //开始轮询监听是否有用户进行了扫码登陆操作
        this.checkLogin(token,$);
      }
    })).catch((res) => {

    })
  }


  /**
   * 
   * @param {*} qrcodeMaker 
   * @param {*} $ 
   * @param {*} token 
   * 根据返回的二维码token生成二维码
   */
  generateQrcode(qrcodeMaker,$,token) {
    let text = UrlManage.QRCODEGENERATEURL + token;
    $('.install-qrcode').qrcode({width: 300,height: 300,text: text});
  }


  /**
   * 
   * @param {*} token 
   * @param {*} $ 
   * 轮询检查是否有用户登陆
   */
  checkLogin(token,$) {
    let startTime = new Date().getTime();
    var interval = setInterval(() => {
      fetch(UrlManage.LOGINSESSIONURL + token + '/session_id',
          {headers: new Headers(
            UrlManage.REQUESTHEADER
          ),
          method: 'post'
      }).then((res) => {
        return res.json();
      }).then((res) => {
        if(res.result) {
          window.localStorage.setItem('sessionId',res.session_id);
          window.location.href = '/recharge/chargeAction.html';
          clearInterval(interval);
        } else {
          let currentTime = new Date().getTime();
          if(currentTime - startTime > 60000) {
            clearInterval(interval);
            //展示请刷新按钮
            $('.refresh').show('low');
          }
        }
      })
    },2000);
  }

  refresh() {
    //清除掉原来的二维码
    //隐藏刷新按钮
    let resetFlag = true;
    this.handleLogin(resetFlag);
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
            <div className="install-qrcode qrcode">
              <div className="refresh">
                <div className="refresh-content">
                  <p>二维码失效</p>
                  <a className='refresh-action' onClick={this.refresh}>请刷新</a>
                </div>
              </div>
            </div>
            <span className="step">步骤</span>
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
            <p>建议使用Chrome浏览器进行充值</p>
            <p>请留意您的浏览器对银联和各家银行网银的拦截</p>
          </section>
        </div>
      </div>      
    </div>;
  }
}
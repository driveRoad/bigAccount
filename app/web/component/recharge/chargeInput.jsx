import React, {Component} from 'react';
import ReactModal from 'react-modal';

import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import User from '../../asset/images/recharge/user.png';
import Input from '../../component/common/input/input.jsx';
import './chargeAction.css';



const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)'
  }
};

class ChargeInput extends Component {
  constructor(props) {
    super(props);
    this.options = {
      width: 460,
      height: 60,
      placeHolder: '请输入充值金额',
      borderColor: '',
      errorMessage: '您的输入不合法，请输入数字'
    }

    this.state = {
      modalIsOpen: false,
      userInfo: {
        userName: '',
        userAccount: '',
        userExtraMoney: '',
        userTotalMoney:''
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
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

  openModal() {
    ReactModal.setAppElement('#app');
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  /** 
   * 退出登陆账户，清楚localstorage:sessionId,跳转到扫码页面
  */
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
              <img src={Charge}/><span>充值金额</span>
            </span>
          </div>
          <div className="charge-input">
            <Input options={this.options}/>
          </div>

          <button className="recharge-action" onClick={this.openModal}>
            <span>下一步</span>
          </button>
          {/*点击下一步，弹出模态对话框*/}
          <ReactModal
            isOpen={this.state.modalIsOpen}
            style={modalStyles}
            contentLabel="Charge Select Modal"
            overlayClassName="Overlay"
          >
          </ReactModal>

          <div className="bottom-pic">
            <img src={Bootom}/>
          </div>
        </section>
      </div>
    </div>;
  }
}

export default ChargeInput;
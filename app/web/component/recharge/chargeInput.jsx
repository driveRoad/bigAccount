import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import User from '../../asset/images/recharge/user.png';
import Input from '../../component/common/input/input.jsx';
import './chargeAction.css';
import loading from '../../asset/images/loading.gif';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderStyle: 'none'
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
            value: '',
            userInfo: {
                userName: '',
                userAccount: '',
                userExtraMoney: '',
                userTotalMoney: ''
            }
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.exitAccount = this.exitAccount.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onCharge = this.onCharge.bind(this);

    }


    componentDidMount() {
        //根据sessionId获取用户登陆信息,首先从localStorage上获取，如果localStorage没有，再从服务端获取
        let sessionId = window.localStorage.getItem('sessionId');
        if (sessionId) {
            let userInfoLocal = JSON.parse(window.localStorage.getItem('userInfo'));
            if (userInfoLocal && userInfoLocal.userName) {
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
        if (!sessionId) {
            window.location.href = '/recharge/mobileScan.html';
            return;
        }

        let url = 'http://craxhome.ddns.net:11100/mock/11/api/v2/client/account/detail/total';
        fetch(url,
            {
                headers: new Headers({
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

    updateValue(newValue) {
        this.setState({value: newValue});
    }

    onCharge(event) {
        this.openModal();
        let chargeBtn = ReactDOM.findDOMNode(this.refs.chargeBtn);
        chargeBtn.blur();

        let funSubmitForm = function (res) {
            this.closeModal();
            //依据获取的表单数据，提交表单，跳转富民页面
            let formMethod = res["form_method"];
            let formData = res["form_data"];
            let chargeForm = ReactDOM.findDOMNode(this.refs.chargeForm);
            // chargeForm.action = formMethod["url"];
            // chargeForm.method = formMethod["method"];
            chargeForm.childNodes[0].value = formData["merchant_id"];
            chargeForm.childNodes[1].value = formData["encryptkey"];
            chargeForm.childNodes[2].value = formData["data"];
            chargeForm.submit();
        }.bind(this);

        //向服务器获取表单数据
        let searchParams = new URLSearchParams();
        searchParams.append("money", this.state.value);
        searchParams.append("type", "pc");

        const packageJson = require("../../../../package.json");
        //真实地址：/api/v2/client/account/reapal/form/recharge_request
        //mock地址: http://craxhome.ddns.net:11100/mock/11/api/v2/client/account/reapal/form/recharge_request
        fetch('http://craxhome.ddns.net:11100/mock/11/api/v2/client/account/reapal/form/recharge_request', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // 指定提交方式为表单提交
                'OA-TOKEN': window.localStorage.getItem('sessionId'),
                'CLIENT-INFO': {"version": packageJson.version, "market_vendor": 'dzh', "device": {"platform": 'web'}}
            }),
            body: searchParams.toString()
        })
            .then((res) => {
                return res.json()
            })
            .then(funSubmitForm);
    }

    /**
     * 退出登陆账户，清楚localstorage:sessionId,跳转到扫码页面
     */
    exitAccount() {
        let exitUrl = 'http://craxhome.ddns.net:11100/mock/11/api/v1/client/sessions';
        fetch(exitUrl,
            {
                headers: new Headers({
                    "Accept": 'application/json',
                    "Origin": '*',
                    "Access-Control-Allow-Origin": '*'
                }),
                method: 'delete'
            }).then(() => {
            window.localStorage.removeItem('sessionId');
            window.localStorage.removeItem('userInfo');
            window.location.href = 'mobileScan.html';
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
                        <Input updateValue={this.updateValue} options={this.options}/>
                    </div>

                    <button className="recharge-action" onClick={this.onCharge} ref="chargeBtn">
                        <span>下一步</span>
                    </button>

                    <form className="charge-form" action="/recharge/chargeResult.html" target="_blank"
                          method="get" ref="chargeForm">
                        <input type="text" name="merchant_id"/>
                        <input type="text" name="encryptkey"/>
                        <input type="text" name="data"/>
                    </form>
                    {/*点击下一步，弹出模态对话框*/}
                    <ReactModal
                        isOpen={this.state.modalIsOpen}
                        style={modalStyles}
                        contentLabel="Charge Select Modal"
                        overlayClassName="Overlay"
                    >
                        <img src={loading}/>
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
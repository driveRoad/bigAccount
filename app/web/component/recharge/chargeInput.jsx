import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import User from '../../asset/images/recharge/user.png';
import Input from '../../component/common/input/input.jsx';
import ChargeSelect from './chargeSelect'
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
            value: ''
        };
        this.updateValue = this.updateValue.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.onCharge = this.onCharge.bind(this);
        this.onSucccess = this.onSucccess.bind(this);
        this.onFail = this.onFail.bind(this);
    }

    updateValue(newValue) {
        this.setState({value: newValue});
    }

    openModal() {
        ReactModal.setAppElement('#app');
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    onCharge(event) {
        this.openModal();
        let chargeBtn = ReactDOM.findDOMNode(this.refs.chargeBtn);
        chargeBtn.blur();

        let funSubmitForm = function (res){
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

    onSucccess() {
        this.closeModal();
    }

    onFail() {
        this.closeModal();
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
                    {/*点击下一步，弹出模态对话框，等待服务器返回表单数据*/}
                    <ReactModal
                        isOpen={this.state.modalIsOpen}
                        style={modalStyles}
                        contentLabel="Charge Pending Modal"
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
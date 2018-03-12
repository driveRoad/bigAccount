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
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSucccess = this.onSucccess.bind(this);

        this.onFail = this.onFail.bind(this);
    }

    openModal(event) {
        ReactModal.setAppElement('#app');
        this.setState({modalIsOpen: true});

        let funSubmitForm = function (res){
            this.setState({modalIsOpen: false});
            //依据获取的表单数据，提交表单，跳转富民页面
            let formMethod = res["form_method"];
            let formData = res["form_data"];
            console.log(formMethod);
            console.log(formData);
            let chargeForm = ReactDOM.findDOMNode(this.refs.chargeForm);
            //chargeForm.action = formMethod["url"];
            //chargeForm.method = formMethod["method"];
            console.log(chargeForm.action);
            console.log(chargeForm.method);
            chargeForm.childNodes[0].value = formData["merchant_id"];
            chargeForm.childNodes[1].value = formData["encryptkey"];
            chargeForm.childNodes[2].value = formData["data"];
            chargeForm.submit();
        }.bind(this);

        //向服务器获取表单数据
        let searchParams = new URLSearchParams();
        searchParams.append("money", "100");
        searchParams.append("type", "app");
        fetch('http://craxhome.ddns.net:11100/mock/11/api/v2/client/account/reapal/form/recharge_request', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
            }),
            body: searchParams.toString()
        })
            .then((res) => {
                return res.json()
            })
            .then(funSubmitForm);
    }

    closeModal() {
        this.setState({modalIsOpen: false});
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
                        <Input options={this.options}/>
                    </div>

                    <button className="recharge-action" onClick={this.openModal}>
                        <span>下一步</span>
                    </button>

                    <form className="charge-form" action="http://craxhome.ddns.net:11100/mock/11/api/v2/client/account/reapal/form/recharge_request"
                          method="post" target="_blank" ref="chargeForm">
                        <input type="text" name="merchant_id" ref="merchantId"/>
                        <input type="text" name="encryptkey" ref="encryptKey"/>
                        <input type="text" name="data" ref="data"/>
                    </form>
                    {/*点击下一步，弹出模态对话框*/}
                    <ReactModal
                        isOpen={this.state.modalIsOpen}
                        style={modalStyles}
                        contentLabel="Charge Select Modal"
                        overlayClassName="Overlay"
                    >
                        <ChargeSelect onClickClose={this.closeModal} onClickSuccess={this.onSucccess}
                                      onClickFail={this.onFail}/>
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
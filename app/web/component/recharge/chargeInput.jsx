import React, {Component} from 'react';
import Bootom from '../../asset/images/recharge/bottom.png';
import BootomWen from '../../asset/images/recharge/bottomwen.png';
import Charge from '../../asset/images/recharge/charge.png';
import User from '../../asset/images/recharge/user.png';
import Input from '../../component/common/input/input.jsx';
import ChargeSelect from './chargeSelect'
import ReactModal from 'react-modal';
import './chargeAction.css';


const customStyles = {
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

  openModal() {
    ReactModal.setAppElement('#app');
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onSucccess() {
    console.log('success');
    this.closeModal();
  }

  onFail() {
    console.log('fail');
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
          {/*点击下一步，弹出模态对话框*/}
          <ReactModal
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            contentLabel="Charge Select Modal"
            overlayClassName="Overlay"
          >
            <ChargeSelect onClickClose={this.closeModal} onClickSuccess={this.onSucccess} onClickFail={this.onFail}/>
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
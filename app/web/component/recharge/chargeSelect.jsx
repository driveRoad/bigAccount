import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SuccessImg from '../../asset/images/recharge/success_icon.png';
import FailImg from '../../asset/images/recharge/fail_icon.png';
import CloseImg from '../../asset/images/recharge/close_icon.png';

import './chargeSelect.css'

class ChargeSelect extends Component {

  render() {
    return (
      <div className="charge-select">
        <img className="img-close" src={CloseImg} alt="close" onClick={this.props.onClickClose}/>
        <p className="wait-title">请等待网页充值结果</p>
        <p className="wait-subtitle">请在新开存管充值页面完成充值后选择</p>
        <div className="result-img-section">
          <img className="img-success" src={SuccessImg} alt="success"/>
          <img className="img-fail" src={FailImg} alt="fail"/>
        </div>
        <div className="result-btn-section">
          <button className="btn-success" onClick={this.props.onClickSuccess}>充值成功</button>
          <button className="btn-fail" onClick={this.props.onClickFail}>充值失败</button>
        </div>
      </div>
    )
  }
}

/*
  ChargeSelect设置以下属性：

  onClickClose :关闭按钮事件
  onClickSuccess :点击成功按钮事件
  onClickFail :点击失败按钮事件
 */
export default ChargeSelect;
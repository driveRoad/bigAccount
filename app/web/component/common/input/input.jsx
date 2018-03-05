'use strict';
import React, {Component} from 'react';
import './input.css';

export default class Input extends Component {
  constructor(props) {
    super(props);

    //设置初始化属性
    this.inputStyle = {
      width: props.options && props.options.width + 'px' || '460px',
      height: props.options && props.options.height + 'px' || '60px',
      borderColor: props.options && props.options.borderColor || ''
    };
    this.placeholder = props.options && props.options.placeHolder || '';
    this.errorMessage = props.options && props.options.errorMessage || '请输入数字';
    this.unitStyle = {
      left: (parseInt(props.options.width) - 42) + 'px',
      top: (parseInt(props.options.height) - 21) / 2 + 'px'
    }
     
    //设置初始状态值
    this.state = {
      value: '',
      errorStyle: {
        display: 'none'
      }
    }

    //this绑定
    this.handleChnage = this.handleChnage.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
  }

  /** 输入有误时，更改输入框状态*/
  getErrorMessage() {
    this.setState({
      value:'',
      errorStyle: {
        display: 'block'
      }
    })
  }

  /** 处理用户的输入，判断输入是否合法*/
  handleChnage() {
    let inputValue = this.refs.myTextInput.value;
    if(inputValue && isNaN(inputValue)) {
      //当输入不符合要求的时候，把状态置为true,显示错误提示信息
      this.getErrorMessage();
      return;
    }
    console.log(inputValue.length);
    //控制输入的长度
    if(inputValue && inputValue.length > 10) {
      return;
    }

    //取消错误提示
    this.setState({
      value:inputValue,
      errorStyle: {
        display:'none'
      }
    });

  }
  render() { 
    return <div>
      <div className='common-input'>
        <input type='text' placeholder={this.placeholder}  onChange={this.handleChnage} value={this.state.value} ref='myTextInput' style={this.inputStyle}/>
        <span className='error-input' style={this.state.errorStyle}>{this.errorMessage}</span>
        <span className="unit" style={this.unitStyle}>元</span>
      </div>
    </div>
  }
}
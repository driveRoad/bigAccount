import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import './charge.css';

export default class Charge extends Component {
  constructor(props) {
    super(props)
    this.getPage = this.getPage.bind(this); 
    
  }
  getPage(pageName) {
      let pageModule = require('component/recharge/' + pageName + '.jsx').default;
      return React.createElement(pageModule);
  }

  /** 
   * 如果目前有用户登陆，则在点击手机充值页面的时候，要自动跳转到充值页面
   * 如果目前无用户登陆，则通过url手动访问任何页面都跳转到扫码页面
  */
  componentDidMount() {
    if(this.props.pageName !== 'mobileScan' && !window.localStorage.getItem('sessionId')) {
      window.location.href = 'mobileScan.html';
    }else {
      if(this.props.pageName === 'mobileScan' && window.localStorage.getItem('sessionId')) {
        window.location.href = 'chargeAction.html'
      }
    }
  }

  render() {
    return <div id="charge-page">
      <Header menuactive={this.props.menuActive}></Header>
      {
        this.getPage(this.props.pageName)
      }
      <Footer></Footer>
    </div>;
  }
}
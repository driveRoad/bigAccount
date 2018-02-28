import React, { Component } from 'react';
import './header.css';
import Logo from '../../asset/images/logo.png';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive:''
    };
  }
  componentWillMount() {
    console.log('------Header componentWillMount----');
  }

  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  handleClick(menu) {
    this.state.menuActive = menu;
    
  }
  render() {
    let menuactive = this.props.menuactive;
    let indexMenu = menuactive == 'index' ? true : false;
    let companynewMenu = menuactive == 'companynew' ? true : false;
    let ventureMenu = menuactive == 'venture' ? true : false;
    let infoMenu = menuactive == 'info' ? true : false;
    let rechargeMenu = menuactive == 'recharge' ? true : false;
    let aboutMenu = menuactive == 'about' ? true : false;

    return <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo}/>
        </div>
        <ul className="nav">
          <li className="nav-item"><a className={indexMenu?'nav-active':'nav-inactive'} href="/index.html">首页</a></li>
          <li className="nav-item"><a className={companynewMenu?'nav-active':'nav-inactive'} href="/companynew.html">公司新闻</a></li>
          <li className="nav-item"><a className={ventureMenu?'nav-active':'nav-inactive'} href="/ventureedu.html">风险教育</a></li>
          <li className="nav-item"><a className={infoMenu?'nav-active':'nav-inactive'} href="/info.html">信息披露</a></li>
          <li className="nav-item"><a className={rechargeMenu?'nav-active':'nav-inactive'} href="/recharge.html">在线充值</a></li>
          <li className="nav-item"><a className={aboutMenu?'nav-active':'nav-inactive'} href="/about.html">关于我们</a></li>
        </ul>
      </div>
    </header>;
  }
}

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
import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Info from  './Info.js'

export default class New extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <Info/>
      <Footer></Footer>
    </div>;
  }
}

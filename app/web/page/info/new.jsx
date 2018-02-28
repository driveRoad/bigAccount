import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';

export default class New extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <Footer></Footer>
    </div>;
  }
}
import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';

export default class Charge extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }

  componentWillMount() {
  	console.log('----componentWillMount------');
  }

  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>{this.props.message}
      <Footer></Footer>
    </div>;
  }
}
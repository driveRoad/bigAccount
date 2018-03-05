import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Info from  './Info.js'
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/infoBanner.png';

export default class New extends Component {
  constructor(props) {
    super(props);
    this.options = {
      bannerImage: BannerImage,
      bannerText:'关于我们'
    }
  }
  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      
      <Info/>
      <Footer></Footer>
    </div>;
  }
}

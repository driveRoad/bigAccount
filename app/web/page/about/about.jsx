import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/aboutBanner.png';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.options = {
      bannerImage: BannerImage,
      bannerText:'关于我们'
    }
  }
  
  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>{this.props.message}
      <Banner options={this.options}/>
      <Footer></Footer>
    </div>;
  }
}
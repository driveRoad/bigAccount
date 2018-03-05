import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/newBanner.png';

export default class New extends Component {
  constructor(props) {
    super(props);
    this.options = {
      bannerImage: BannerImage,
      bannerText:'公司新闻',
      height:200
    }
  }
  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <Banner options={this.options}/>
      <Footer></Footer>
    </div>;
  }
}
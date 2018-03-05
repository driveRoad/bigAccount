import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/newBanner.png';
import './ventureedu.css'

class VentureEdu extends Component {
  render() {
    let ventureEdu = this.props.ventureEdu;
    let index = this.props.index;
    let width = 574;
    let height = 700;
    let mar = 50;
    let left = index % 2 ? width + mar : 0;
    let top = (Math.floor(index / 2)) * (mar + height);
    let ventureStyle = {
      width: width,
      height: height,
      left: left,
      top: top
    };

    let dividerStyle = {
      display: ventureEdu.subTitle === '' ? 'none' : 'inline-block'
    };
    return (
      <div className="ventureedu" style={ventureStyle}>
        <img className="thumb" src={require('../../asset/images/'+ ventureEdu.thumb)} alt={ventureEdu.title}/>
        <div className="title-section">
          <div className="title">{ventureEdu.title}</div>
          <div className="divider" style={dividerStyle}/>
          <div className="subtitle">{ventureEdu.subTitle}</div>
        </div>
        <p className="summary">{ventureEdu.summary}</p>
        <div className="detail-section">
          <div className="detail-txt"><a className="detail-link" href={ventureEdu.url}>详情</a></div>
          <img className="detail-img" src={require('../../asset/images/ventureedu/list_icon_right_black.png')} alt={ventureEdu.title}/>
        </div>
      </div>
    );

  }
}

class VentureEduList extends Component {


  render() {
    let ventureEduList = this.props.ventureEduList;

    return (
      <div className="ventureedu-list">
        {
          ventureEduList.map((item, index) => {

            return <VentureEdu ventureEdu={item} key={index.toString()} index={index}/>;

          })
        }
      </div>
    );
  }
}

export default class VentureEduPage extends Component {
  
  constructor(props) {
    super(props);
    this.options = {
      bannerImage: BannerImage,
      bannerText:'风险教育',
      height:200
    }
  }
  
  render() {
    return (
      <div>
        <Header menuactive={this.props.menuActive}></Header>
        <Banner options={this.options}/>
        <VentureEduList ventureEduList={this.props.ventureEduList}/>
        <Footer></Footer>
      </div>
    )
  }
}
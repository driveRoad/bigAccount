import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Info from  './Info.js'
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/infoBanner.png';
import Detail0 from './info_details/detail0.js'
import Detail1 from './info_details/detail1.js'
import Detail2 from './info_details/detail2.js'
import Detail3 from './info_details/detail3.js'
import Detail4 from './info_details/detail4.js'
import './information.css'

export default class New extends Component {
  constructor(props) {
    super(props);

    this.state={
      index :this.props.pageName.substr(this.props.pageName.length-1,1),
    }
  }
  renderCompont(){
    if(this.state.index==0){
      return(<Detail0/>)
    }else if(this.state.index==1){
      return(<Detail1/>)
    }else if(this.state.index==2){
      return(<Detail2/>)
    }else if(this.state.index==3){
      return(<Detail3/>)
    }else if(this.state.index==4){
      return(<Detail4/>)
    }
  }
  render() {
    const titles=['关于做好P2P网络借贷风险专项整治整改验收工作的通知','网络借贷信息中介机构业务活动信息披露指引','网络借贷资金存管业务指引','网络借贷资金存管业务指引','网络借贷信息中介机构业务活动管理暂行办法'];
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <div className="contentBox">
        <div className="content">
          <div className="nav">
            <span><a href={'/index.html'}>首页</a></span>
            <span> > </span>
            <span><a href={'/info.html'}>信息披露</a></span>
            <span> > </span>
            <span>{titles[this.state.index]}</span>
          </div>
          <div className="world">
            {
              this.renderCompont()
            }
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>;
  }
}

import React, {Component} from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import Banner from 'component/common/banner/banner.jsx';
import BannerImage from '../../asset/images/banner/aboutBanner.png';


import './about.css'

var memberArr = [
  {
    name: '万明杰',
    photo: 'about/团队介绍/万明杰.png',
    position: 'CEO',
    resume: '前夸克金融市场部总监，于2015年组建团队打造互联网品牌“才米公社”，两年交易额突破37亿，在平台的搭建及金融产品' +
    '的开发方面具有丰富的经验。'
  },

  {
    name: '孙建荣',
    photo: 'about/团队介绍/孙建荣.png',
    position: 'COO',
    resume: '毕业于北京理工大学计算机系，拥有丰富的创业经历，对创业有着自己独特的见解。在技术和金融都有较深的研究和实践经验。' +
    '善于互联网探索，精于把握时代脉搏，抱着用技术手段改变投资方式的信念将金融与互联网有机融合。'
  },

  {
    name: '徐颖颖',
    photo: 'about/团队介绍/徐颖颖.png',
    position: '风控总监',
    resume: '历任招商银行信用卡中心政策规划专家、平安普惠信贷分析专家、中国大地财产保险股份有限公司风控经理，' +
    '对信贷数据的模型及风险数据架构规划有着极深的理解。'
  },

  {
    name: '劳书成',
    photo: 'about/团队介绍/劳书成.png',
    position: '首席技术官  CTO',
    resume: '对技术架构和技术团队管理有丰富的从业经验，曾是北京冰封互动的核心程序员。2012年作为高级架构师加入杭州乐港科技，' +
    '主导开发了魔晶幻想2及热门手游德州。在互联网研发及企业管理上有着深厚的理解。'
  },

  {
    name: '姜一新',
    photo: 'about/团队介绍/姜一新.png',
    position: '首席运营官',
    resume: '专注互联网运营，原百度外卖区运营主管。深入活动策划和项目资源管理各方面领域，擅长运营人员的拆解和分配。' +
    '个人还有多年的创业经历，对自我驱动、结果导向的互联网价值观有强烈的认同。'
  }
];

class IntroduceBanner extends Component {
  render() {
    return (
      <div className="introduce-banner">
        <div className="stripe"/>
        <span className="title">{this.props.title}</span>
        <div className="stripe"/>
      </div>
    );
  }
}


class SeniorCard extends Component {
  render() {
    let member = this.props.member;
    return (
      <div className="senior-card">
        <img className="photo" src={require('../../asset/images/' + member.photo)} alt="portrait"/>
        <div className="name-position-section">
          <span className="name">{member.name}</span>
          <span className="position">{member.position}</span>
        </div>
        <p className="resume">{member.resume}</p>
      </div>
    );
  }
}

class MediumCard extends Component {
  render() {
    let member = this.props.member;
    return (
      <div className="medium-card">
        <img className="photo" src={require('../../asset/images/' + member.photo)} alt="portrait"/>
        <div className="name-position-section">
          <span className="name">{member.name}</span>
          <span className="position">{member.position}</span>
        </div>
        <p className="resume">{member.resume}</p>
      </div>
    );
  }
}



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
      <Header menuactive={this.props.menuActive}></Header>
      <Banner options={this.options}/>
      <div className="about">
        <IntroduceBanner title="公司简介"/>
        <p className="introduce">大账户是聚源金融公司旗下发布的一款专业金融理财APP，操作简单，提供一站式定制化
          服务，依据客户的需求和特征，为其量身定制资产配置方案，轻松帮助客户实现财富增值。 先后获得江南愤青陈宇和
          聚秀资本的天使投资，总部位于杭州江南1535茶馆。 在2017年5月，大账户携手重庆富民银行签订资金存管服务协议。
          我们仅进行信息撮合，全程不触碰任何资金，银行把关，保证每一个标的都是真实的，更合规、更大限度地保障
          用户资金安全。
        </p>
        <IntroduceBanner title="股东介绍"/>
        <p className="introduce">小黑鱼是集移动互联网生活方式、消费新生态、大众金融服务于一体的科技金融平台。
          公司成立于2017年3月31日，注册资本5000万元。前身为途牛金服，在途牛体系内负责运营途牛理财平台、
          旅游分期及小额信贷等金融板块的产品。于2018年1月10日宣布完成9.5亿元A轮融资，该轮融资由光速中国、
          晨兴资本、集富亚洲、戈壁创投、丰盛集团、大众点评创始人张涛和小黑鱼科技管理团队联合投资。
        </p>
        <IntroduceBanner title="团队介绍"/>

        <div className="member-list">
          <div className="senior-list">
            <SeniorCard member={memberArr[0]}/>
            <SeniorCard member={memberArr[1]}/>
          </div>
        </div>

        <div className="member-list">
          <div className="medium-list">
            <MediumCard member={memberArr[2]}/>
            <MediumCard member={memberArr[3]}/>
            <MediumCard member={memberArr[4]}/>
          </div>
        </div>

        <IntroduceBanner title="合作伙伴介绍"/>
      </div>
      <Footer></Footer>
    </div>;
  }
}
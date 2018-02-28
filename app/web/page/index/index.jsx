import React, { Component } from 'react';
import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';
import headerImage from '../../asset/images/header.png';
import Index1 from '../../asset/images/index1.png';
import Index2 from '../../asset/images/index2.png';
import Index3 from '../../asset/images/index3.png';
import Qrcode from '../../asset/images/qrcode.png';
import './index.css';

export default class Charge extends Component {
  componentDidMount(){
    console.log('----componentDidMount-----');
  }

  componentWillMount() {
  	console.log('----componentWillMount------');
  }

  render() {
    return <div>
      <Header menuactive={this.props.menuActive}></Header>
      <div className="main">
        <div className="page-container page-component">
          <section>
            <div className="section-common">
              <img src={headerImage}/>
            </div>
          </section>
          <section>
            <div className="section-common">
              <img src={Index1}/>
              <div className="excellent-assets common-intro">
                <span>优质资产</span>
                <span>严选资产，类型丰富，小额分数</span>
                <span>商业承兑汇票，车辆质押贷款</span>
                <span>信用卡余额代偿，商城消费分期</span>
              </div>
            </div>
          </section>
          <section>
            <div className="section-common">
              <div className="intellence-tool common-intro">
                <span>智投工具</span>
                <span>无需打理，资金更高效</span>
                <span>系统自动投标，操作便捷，投资轻松</span>
              </div>
              <img src={Index2}/>
            </div>
          </section>
          <section>
            <div className="section-common">
              <img src={Index3}/>
              <div className="venture-safe common-intro">
                <span>多重保障</span>
                <span>智能云风控引擎，为投资人提供多方面的安全系数</span>
                <span>精选优质项目，拥有严格的合作方准入门槛</span>
                <span>极度分散机制，使用类别分散和资金分散，降低系统风险</span>
                <span>资金透明可追踪，每笔投资信息完整披露于平台</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>;
  }
}
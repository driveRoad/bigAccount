import React, {Component} from 'react';

import Header from 'component/header/header.jsx';
import Footer from 'component/footer/footer.jsx';

import './ventureedu_detail.css'

class VentureEduNav extends Component {
  render() {
    return (
      <div className="ventureedu-nav">
        <a  className="edu-link" href={this.props.indexUrl}>首页</a>
        <span>{' > '}</span>
        <a className="edu-link" href={this.props.ventureEduListUrl}>风险教育</a>
        <span>{' > '}</span>
        <span>{this.props.ventureEduTitle}</span>
      </div>
    )
  }
}

class VentureEduDetailPage extends Component {

  getVentureEdu(pageName) {
    console.log('xxxxxxx' + pageName);
    const con = require('./ventureedu_details/' + pageName).default;
    return React.createElement(con);
  }

  render() {
    let ventureEdu = this.props.ventureEdu;
    return (
      <div>
        <Header menuactive={this.props.menuActive}></Header>
        <div className="ventureedu-detail-main">
          <VentureEduNav indexUrl={this.props.indexUrl} ventureEduListUrl={this.props.ventureEduListUrl} ventureEduTitle={ventureEdu.title}/>
          <div className="ventureedu-content">
          {
            this.getVentureEdu(this.props.pageName)
          }
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default VentureEduDetailPage;
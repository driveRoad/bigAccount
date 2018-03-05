import React, { Component } from 'react';
import appDownload from '../../asset/images/appdownload.png';
import appWeiXin from '../../asset/images/weixin.png';
import waiter from '../../asset/images/waiter.png';
import './footer.css';

export default class Footer extends Component {
  render() {
    return <footer className="footer">	
		  <div className="company-info">
		    <div className="info-top">
				  <section className="baseinfo">
					  <span>杭州聚源金融信息服务有限公司</span>
					  <span>TEL: 0571-28809889</span>
					  <span>地址： 浙江省杭州市上城区白云路9号</span>
					  <span>Email:gandalf@ominiaccount.com</span>
          </section>
          <section className="qrcode">
					  <p id="app-download">
						  <img src={appDownload}/>
              <span className="qrcode-tip">APP下载</span>
            </p>
            <p id="app-weixi">
						  <img src={appWeiXin}/>
              <span className="qrcode-tip">关注公众微信号</span>
            </p>
          </section>
          <section className="waiter">
            <div>
              <span><img src={waiter}/></span>
              <span>400-998-12306</span>
              <span>客服时间: <time>9:00 ~ 18:00</time></span>
            </div>
          </section>
        </div>
        <div className="info-bottom">
          <span>友情链接</span>
          <span>国信证券</span>
          <span>盈米财富</span>
          <span>老虎证券</span>
          <span>聚募众筹</span>
          <span>聚秀社区</span>
          <span>网贷天眼</span>
          <span>网贷之家</span>
          <span>杭州银行</span>
          <span>民生银行</span>
          <span>聚米众筹</span>
          <span>网贷之家</span>
        </div>
      </div>
      <div className="company-record">
        <span>浙ICP备1608998号-1 增值业务经营许可证：浙B2-20171267</span>
        <span>Copyright @2015-2016杭州聚源金融信息服务有限公司.All Rights Reserved.</span>
      </div> 
    </footer>;
  }
}


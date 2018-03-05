import React, {Component} from 'react';



export default () => {
  return (
    <div>
      <p>最近有部分用户反馈，在大账户使用邮储银行进行充值购买的时候不成功，系统反馈需要“开通银行卡无卡支付”。为此，
        账户君专门制作了以下教程，教大家一步一步解决这个问题。
      </p>
      <p>由于最近邮储银行的支付系统进行了调整，要求用户使用该行银行卡在外部网站进行充值时，要先在银联网站上“开通银行卡无卡支付”。
        大账户支付中心的同事告诉账户君，这种限制主要针对晚间进行的充值支付，白天的限制会少些（因此大账户强烈建议大家尽量在白天
        进行充值）。遇到这种情况，可参考银联官方网站教程。
      </p>
      <img src={require('../../../asset/images/news/新闻详情7-图/新闻详情7-图1.png')} alt="00_00"/>
      <h3>详细教程：</h3>
      <p>1、进入银联钱包官方网站： <a href="https://www.95516.com/">https://www.95516.com/</a>
      </p>
      <p>2、点击网页头部的“帮助中心”：</p>
      <img src={require('../../../asset/images/news/新闻详情7-图/新闻详情7-图2.png')} alt="00_00"/>
      <p>3、在帮助中心页面“支持银行”菜单中选择“如何开通银联在线支付”，进入银联官方网站教程。
      </p>
      <img src={require('../../../asset/images/news/新闻详情7-图/新闻详情7-图3.png')} alt="00_00"/>
      <p>Ps.或者您可以直接点击开通无卡支付的网址，逐步完成开通：</p>
      <p><a href="https://www.95516.com/portal/open/init.do?entry=open">https://www.95516.com/portal/open/init.do
        ?entry=open</a>
      </p>
      <img src={require('../../../asset/images/news/新闻详情7-图/新闻详情7-图4.png')} alt="00_00"/>
      <img src={require('../../../asset/images/news/新闻详情7-图/新闻详情7-图5.png')} alt="00_00"/>
      <p>以上为开通银行卡无卡支付的流程。
      </p>
      <p>如有疑问，您也可以致电银联官方客服95516询问，或由大账户客服来为您讲解，客服电话：400-188-5528。
      </p>
    </div>
  );
};
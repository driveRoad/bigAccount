       /**
路由规则：
  首页：index和 /
  公司新闻页： /companynew
  风险教育： /ventureedu
  信息披露: /info
  在线充值: /recharge
  关于我们: /recharge

  后续添加的路由规则暂时按照下面/***(需全部小写),app.controller模式添加
**/


module.exports = app => {
  /**
   * 同步请求路由注册
   */
  app.get('/index.html', app.controller.index.index.index);
  app.get('/companynew.html', app.controller.companynew.companynew.new);
  app.get(/^\/companynew\/news_detail_[0-9]{5}.html$/, app.controller.companynew.companynew.news_detail);
  app.get('/ventureedu.html', app.controller.ventureedu.ventureedu.new);
  app.get(/^\/ventureedu\/ventureedu_detail_[0-9]{5}.html$/, app.controller.ventureedu.ventureedu.ventureedu_detail);
  app.get('/info.html', app.controller.info.info.new);
  app.get('/recharge.html', app.controller.recharge.recharge.charge);
  app.get('/about.html', app.controller.about.about.about);
  

  app.get('/spa(/.+)?', app.controller.spa.spa.ssr);

  

};
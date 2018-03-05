'use strict';

let newsList = require('../../mocks/news_list_json');

module.exports = app => {
  return class AppController extends app.Controller {

    async new() {
      console.log('xxxxxxx'+newsList);
      const {ctx} = this;
      await ctx.render('companynew/new.js', {
          menuActive: 'companynew',
          message: {text: '公司介绍新闻!'},
          newsList: newsList
        }
      );
    }

    async news_detail() {
      const {ctx} = this;
      let pagename = ctx.query && ctx.query.pageName || ctx.pageName;

      let preNews = null;
      let curNews = null;
      let nextNews = null;
      for(let i = 0;i < newsList.length;i++) {
        if(newsList[i].url.indexOf(pagename) >= 0) {
          curNews = newsList[i];
          if(i < newsList.length-1)
            nextNews = newsList[i+1];
          if(i > 0)
            preNews = newsList[i-1];
          break;
        }
      }
      await ctx.render('companynew/news_detail.js', {
        menuActive: 'companynew',
        pageName: pagename,
        message: {text: '新闻详情页!'},
        preNews: preNews,
        news: curNews,
        nextNews: nextNews,
        indexUrl: '/index.html',
        newsListUrl: '/companynew.html'
      });
    }

  };

};
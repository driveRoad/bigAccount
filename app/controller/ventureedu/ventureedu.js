'use strict';

let ventureEduList = require('../../mocks/ventureedu_list_json');

module.exports = app => {
  return class AppController extends app.Controller {
    async new() {
      const { ctx } = this;
      await ctx.render('ventureedu/new.js', {
          menuActive: 'venture',
          title: '--react server side render--',
          keywords: 'react, server side render',
          message: {text: '风险教育!'},
          ventureEduList: ventureEduList
        }
      );
    }

    async ventureedu_detail() {
      const {ctx} = this;
      let pageName = ctx.query && ctx.query.pageName || ctx.pageName;

      let ventureEdu = null;
      for(let i = 0;i < ventureEduList.length;i++) {
        if(ventureEduList[i].url.indexOf(pageName) >= 0) {
          ventureEdu = ventureEduList[i];
          break;
        }
      }

      await ctx.render('ventureedu/ventureedu_detail.js', {
          menuActive: 'venture',
          title: '--react server side render--',
          keywords: 'react, server side render',
          message: {text: '风险教育!'},
          pageName: pageName,
          ventureEdu: ventureEdu,
          indexUrl: '/index.html',
          ventureEduListUrl: '/ventureedu.html'
        }
      );
    }

  };

};
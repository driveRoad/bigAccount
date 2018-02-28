'use strict';
module.exports = app => {
  return class AppController extends app.Controller {

    async new() {
      const { ctx } = this;
      await ctx.render('companynew/new.js', {
        menuActive:'companynew',
        message: { text: '公司介绍新闻!'}});
    }
  };

};
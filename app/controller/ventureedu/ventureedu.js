'use strict';
module.exports = app => {
  return class AppController extends app.Controller {

    async new() {
      const { ctx } = this;
      await ctx.render('companynew/new.js', {
        menuActive:'venture',
        title:'--react server side render--',
        keywords:'react, server side render',
        message: { text: '风险教育!'}});
    }
  };

};
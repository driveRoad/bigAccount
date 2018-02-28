const Model = require('../../mocks/article/list');

/**
  控制器
**/
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('index/index.js', {
        menuActive:'index'
      });
    }
  };
};
'use strict';
module.exports = app => {
  return class AboutController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('about/about.js', { message: 'react server side render!' });
    }

    async about() {
    	const { ctx } = this;
    	await ctx.render('about/about.js', {menuActive:'about',message: '这是关于我们页面'})
    }
  };
};
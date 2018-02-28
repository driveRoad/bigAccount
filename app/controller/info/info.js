"use strict";
module.exports = app => {
	return class InfoController extends app.Controller {
		async new() {
			const { ctx } = this;
			await ctx.render('info/new.js',{
				menuActive:'info',
				message: "这是信息披露页面"
			});
		};
	}
}
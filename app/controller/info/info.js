"use strict";
module.exports = app => {
	return class InfoController extends app.Controller {
		async new() {
			const { ctx } = this;
			await ctx.render('info/new.js',{
				msg:ctx.request.header.referer,
				menuActive:'info',
				message: "这是信息披露页面"
			});
		};
		
		async detail() {
			const {ctx} = this;
			await ctx.render('info/info_detail.js',{
				pageName:ctx.pageName
			})
		}
	}
}
"use strict";

module.exports = app => {
	return class RechargeController extends app.Controller {

		async charge() {
			const { ctx } = this;
			await ctx.render('recharge/charge.js',{
				menuActive:'recharge',
				"message": "这是在线充值页面"
			})
		}
	}
}
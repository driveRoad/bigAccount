"use strict";

module.exports = app => {
	return class RechargeController extends app.Controller {

		//扫码页面
		async charge() {
			const { ctx } = this;
			await ctx.render('recharge/charge.js',{
				menuActive:'recharge',
				pageName:'mobileScan',
				"message": "这是在线充值页面"
			})
		}

		//充值金额输入页面
		async input() {
			const {ctx} = this;
			await ctx.render('recharge/charge.js',{
				pageName:'chargeInput'
			});
		}

		//充值成功页面
		async result() {
			const {ctx} = this;
			await ctx.render('recharge/charge.js',{
				pageName:'chargeResult'
			})
		}

		//充值选择
		async select() {
			const {ctx} = this;
			await ctx.render('recharge/charge.js',{
				pageName:'chargeSelect'
			})
		}

		//充值帮助
		async help() {
			const {ctx} = this;
			await ctx.render('recharge/charge.js',{
				pageName:'chargeHelp'
			})
		}
	}
}
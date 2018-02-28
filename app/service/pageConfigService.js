"use strict";
const Service = require('egg').Service;

class PageConfigService extends Service {
	constructor(ctx) {
		super(ctx);
		console.log("框架启动时执行");
	}
	async find() {
		console.log("框架启动时执行");
	}
}

module.exports = PageConfigService;
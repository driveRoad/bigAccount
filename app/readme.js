/**
 * 控制器、服务、中间件的一些开发规范
 */

 

/**
 * 1.变量定义语义化：
 *  1.1 不能只用var,局部变量和常量要用let和const
 *  1.2 变量名称符合驼峰命名规则，不能使用汉语拼音、不能取和语艺无关的单词
 * 2. 获取上下文请求
 *  2.1 获取url后的参数: ctx.query.***
 *  2.2 获取日志打印： ctx.logger.error()或者ctx.logger.info
 *  2.3 获取配置文件： ctx.config
 * 
 * 3.resutfull API
 */
/**
 * @author chumo.zll 2017/02/26
 * 
 * 获取大账户站点页面渲染所需的上下文数据,目前采取的是koa1的方式
 */

 module.exports = () => {
     return function*(next){
        let ctx = this;
        console.log(ctx);
        getSiteDataContext(ctx);
        yield*  next;
     }
 }

 /**
  * 获取公共上下文
  * @param {*} ctx 
  * 
  */
 function getSiteDataContext(ctx) {
    if(!ctx ) {
        return;
    }

    let pageName = ctx.query.pageName;
    let url = ctx.request && ctx.request.url;
    if(!pageName) {
        pageName = parseUrl(url);
        ctx.query.pageName = pageName;

    }
   ctx.pageName = pageName;

 }

 /**
  * 解析当前url路径
  * @param {*} url 
  */
function parseUrl(url) {
    if(!url || typeof url !== 'string') {
        return;
    }
    let start = url.lastIndexOf("/");
    let end = url.indexOf(".html");
    let pageName = url.substring(start+1,end);
    return pageName;
}

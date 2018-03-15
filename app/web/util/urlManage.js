/** 
 * @author zll 2018/3/14 常量数据管理器
*/
module.exports = {

  /**
   * 获取登陆二维码的token
   */
  QRCODETOKENURL : 'http://craxhome.ddns.net:11021/api/v2/client/qr_token/qrcode_tokens?type=login',
  

  /**
  * 生成二维码的url
  */
  QRCODEGENERATEURL: 'https://www.omniaccount.com/download.html?qrcode_token=',
  
  /**
  * 获取登陆sessionId
  */

  LOGINSESSIONURL : 'http://craxhome.ddns.net:11021/api/v2/client/qr_token/qrcode_tokens/',
  
  /**
  * 获取用户信息的url
  */

  USERINFOURL: 'http://craxhome.ddns.net:11021/api/v2/client/account/detail/total',
  
  /**
   * 退出登陆的url
   */
  EXITLOGINURL: 'http://craxhome.ddns.net:11021/api/v1/client/sessions',
  
  /**
   * 充值的url
   */
  CHARGEURL: 'http://craxhome.ddns.net:11021/api/v2/client/account/reapal/form/recharge_request',
  /**
  * 异步请求头
  */
  REQUESTHEADER: {
    "CLIENT-INFO":JSON.stringify({
      "version":"website 1.0.0",
      "device":{
        "platform":"web"
      }}),
    "Accept": 'application/json',
    "Origin": '*',
    "Access-Control-Allow-Origin": '*'
  }
}

// @ts-ignore
import service from "@/utils/request.ts";
/** 获取验证码 */
interface Email{
    email:string
}
export function Send(data:Email){
    return service({
        // url: process.env.VUE_APP_APIURL + '/v1/send',
        url:'/v1/send',
        method: 'POST',
        data,
    })
}
export function getInfo() {
    return service({
      url: '/cshop-token/cshop-token/controller/userToken/manager/getUserInfo',
      method: 'POST'
    });
  }
  
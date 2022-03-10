// @ts-ignore
import service from "@/utils/request.ts";
/** 获取验证码 */
interface Email{
    email:string
}
export function Send(data:Email){
    return service.request({
        // url: process.env.VUE_APP_APIURL + '/v1/send',
        url:'/v1/send',
        method: 'POST',
        data,
    })
}
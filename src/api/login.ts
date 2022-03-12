// @ts-ignore
import service from "@/utils/request.ts";
/** 获取验证码 */
interface Email{
    email:string
}
export function Send(data:Email){
    return service({
        url: '/v1/send',
        method: 'POST',
        data,
    })
}
interface D {
    onlineProduct:number,
    succ: boolean,
    succNum: number,
    userCount: number,
    visits: number
}
export function getInfo(data:D) {
    return service({
      url: '/getCountData.shtml',
      method: 'POST',
      data
    });
  }

  
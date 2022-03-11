import axios from 'axios'
const baseURL = process.env.VUE_APP_BASEAPI || '/api'
const server=axios.create({
    baseURL,
    timeout:15000
})
//请求拦截
server.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)

})
server.interceptors.response.use((res)=>{
return Promise.resolve(res)
},(error)=>{
    return Promise.reject(error)

})
export default server
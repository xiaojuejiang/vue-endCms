import axios from 'axios'

axios.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/"

axios.interceptors.request.use(function(config){
    let token=localStorage.getItem('token')
    if(token){
      //config发送请求前的配置参数
      config.headers['Authorization']=token;
    }
    return config
},function(error){
  return Promise.reject(error)
})

export const login=(username,password)=>axios.post('/login',{username,password})

export const users=(pagenum,pagesize)=>axios.get('/users',{params:{pagenum,pagesize}})

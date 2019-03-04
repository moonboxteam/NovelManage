import axios from 'axios'

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时设置
  headers: { // 自定义请求头
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    config.headers['credential'] = sessionStorage.getItem('credential') || ''
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

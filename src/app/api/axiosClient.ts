import axios from 'axios'

import { clearAuthCookie, getToken, saveToken } from '@/lib/utils'

import { HttpCode } from '@/constant/enums'
// http://127.0.0.1:8088
export const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptors
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = getToken().access_token
    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (response) => {
    const { url } = response.config
    if (url === 'sign-in') {
      const { access_token, refresh_token } = response.data
      saveToken(access_token, refresh_token)
    } else {
      if (url === 'logout') clearAuthCookie()
    }
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { config, data, status } = error.response
    if (status === HttpCode.UNAUTHORIZED) {
      clearAuthCookie()
    }

    return Promise.reject(error)
  }
)

export default axiosClient

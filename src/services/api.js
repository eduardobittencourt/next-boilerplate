import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const fetcher = (url) => instance.get(url).then((res) => res.data)

export default instance

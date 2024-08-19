import axios from 'axios'

export const axiosBaseUrl = axios.create({
  baseURL: "http://192.168.0.23:5000/api/v1/"
})
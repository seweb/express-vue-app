import axios from 'axios'

const ApiPlugin = (Vue) => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_baseURL
  })

  instance.interceptors.request.use(config =>  {
    config.headers["Content-Type"] = 'application/json'
    return config
  });


  Vue.axios = instance
};

export default {install: ApiPlugin}
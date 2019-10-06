import axios from 'axios'
// const base = 'http://localhost:3020'
const base = ''
export const reqLogin = (params) => {
  return axios.post(base+'/login',params).then(res => res.data)
}
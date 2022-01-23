import axios from 'axios';

export default axios.create({
    baseURL: 'https://ip-fast.com/api/ip/',
  })

import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },

});

api.defaults.timeout = 60000;

export default api;
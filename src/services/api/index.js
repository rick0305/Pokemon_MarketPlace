import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001'
})

//localhost padrao: 3001
//comando json-server -w api.json -p 3001

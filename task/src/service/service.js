import axios from 'axios';

export const service = axios.create({
  baseURL: 'http://localhost:5000/todos',
});

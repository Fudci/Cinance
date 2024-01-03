import axios from 'axios';
import {baseUrl} from './BaseUrl';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // Define your timeout
});

export const GET_ASSETS_COIN = async token => {
  try {
    const response = await api.get('/v2/assets');
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
};

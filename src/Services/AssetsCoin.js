import axios from 'axios';
import {baseUrl} from './BaseUrl';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // Define your timeout
});

export const GET_ASSETS_COIN = async () => {
  try {
    const response = await api.get('/v2/assets');
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
};

export const GET_ASSETS_COIN_HISTORY = async (id, interval) => {
  try {
    const response = await api.get(
      `/v2/assets/${id}/history?interval=${interval}`,
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
};

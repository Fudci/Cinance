import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './BaseUrl';

interface Asset {
  // Define the structure of your asset object
  // Example:
  id: string;
  name: string;
  // Add other properties as needed
}

interface AssetHistory {
  // Define the structure of your asset history object
  // Example:
  id: string;
  history: any[]; // Define the structure of history array
  // Add other properties as needed
}

const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000, // Define your timeout
});

export const GET_ASSETS_COIN = async (): Promise<Asset[]> => {
  try {
    const response: AxiosResponse<Asset[]> = await api.get('/v2/assets');
    return response.data;
  } catch (error) {
    throw error
  }
};

export const GET_ASSETS_COIN_HISTORY = async (id: string, interval: string): Promise<AssetHistory> => {
  try {
    const response: AxiosResponse<AssetHistory> = await api.get(
      `/v2/assets/${id}/history?interval=${interval}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GET_ASSETS_COIN_DETAIL = async (id: string): Promise<Asset> => {
  try {
    const response: AxiosResponse<Asset> = await api.get(`v2/assets/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

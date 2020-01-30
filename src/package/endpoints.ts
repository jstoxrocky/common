import axios, { AxiosResponse } from 'axios';
import * as types from '../types';

const baseURL = 'http://0.0.0.0:5000/api/v1/';
const api = axios.create({ baseURL });

/* eslint-disable import/prefer-default-export */
export const loadSearchResults = async (params: types.Params): Promise<types.SearchPayload> => {
  const response: AxiosResponse<types.SearchPayload> = await api.get('/search', { params });
  const payload = response.data;
  return payload;
};
/* eslint-enable import/prefer-default-export */

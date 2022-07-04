import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.PORT || 3001}`,
});

export const getAll = async () => {
  const response = await api.get('/');
  return response.data;
};

export const getById = async (id) => {
  console.log(baseURL);
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createOne = async (data) => {
  const response = await api.post('/tasks', data);
  return response;
};

export const updateById = async (id, data) => {
  const response = await api.put(`/${id}`, data);
  return response.data;
};

export const deleteById = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

export const updateStatusById = async (id, data, status) => {
  const response = await api.put(`/${id}/${status}`);
  return response.data;
};

export const getAllByStatus = async (status) => {
  const response = await api.get(`/?filter=${status}`);
  return response.data;
};

export const getAllByName = async (name) => {
  const response = await api.get(`/?filter=${name}`);
  return response.data;
};

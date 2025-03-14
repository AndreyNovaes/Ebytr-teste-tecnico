import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT || 3001}/tasks`,
  timeout: 10000, // Timeout após 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para tratar erros globais
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  },
);

export const getAll = async (query) => {
  try {
    if (query) {
      const { orderBy, orderDirection } = query;
      const queryUrl = `?filter=${orderBy}&order=${orderDirection}`;
      const { data } = await api.get(queryUrl);
      return data;
    }
    const { data } = await api.get();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const getById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching task with id ${id}:`, error);
    throw error;
  }
};

export const createOne = async (data) => {
  try {
    const response = await api.post('/', data);
    return response;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateById = async (id, data) => {
  try {
    const response = await api.put(`/${id}`, data);
    return response;
  } catch (error) {
    console.error(`Error updating task with id ${id}:`, error);
    throw error;
  }
};

export const deleteById = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting task with id ${id}:`, error);
    throw error;
  }
};

export const updateStatusById = async (id, status) => {
  try {
    const response = await api.put(`/${id}/${status}`);
    return response.data;
  } catch (error) {
    console.error(`Error updating status for task with id ${id}:`, error);
    throw error;
  }
};

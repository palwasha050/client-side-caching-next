import axios from 'axios';

// Setup cache
const cache = new Map();

// Create a custom axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Substitute with your own API URL
});

api.interceptors.request.use(async (config) => {
  // Generate a unique key for each unique URL
  const key = JSON.stringify(config);

  if (cache.has(key)) {
    // If data is in cache, return it
    return Promise.reject({ isCache: true, data: cache.get(key) });
  }

  return config;
});

api.interceptors.response.use((response) => {
  // Save data to cache after a successful request
  const key = JSON.stringify(response.config);
  cache.set(key, response.data);
  return response;
});

export default api;

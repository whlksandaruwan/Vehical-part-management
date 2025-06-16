import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const partsAPI = {
  // Get all parts with optional filters
  getAllParts: (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.search) params.append('search', filters.search);
    if (filters.partType) params.append('partType', filters.partType);
    if (filters.status) params.append('status', filters.status);
    
    return api.get(`/parts?${params.toString()}`);
  },

  // Get part by ID
  getPartById: (id) => api.get(`/parts/${id}`),

  // Create new part
  createPart: (partData) => api.post('/parts', partData),

  // Update existing part
  updatePart: (id, partData) => api.put(`/parts/${id}`, partData),

  // Delete part
  deletePart: (id) => api.delete(`/parts/${id}`),
};

export default api;
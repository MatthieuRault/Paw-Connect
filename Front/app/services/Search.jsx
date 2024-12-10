import api from './axiosConfig';

// Route Search

export async function searchAnimal(query) {
  try {
    const response = await api.post('search', query);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

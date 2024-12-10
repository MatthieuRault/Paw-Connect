import api from './axiosConfig';

// Route Home
export async function getAnimals() {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

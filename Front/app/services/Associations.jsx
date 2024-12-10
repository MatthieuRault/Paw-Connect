import axios from './axiosConfig';

// Route Associations
export async function getAllAssociations() {
  try {
    const response = await axios.get('associations');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getOneAssociation = async (id) => {
  try {
    const response = await axios.get(`associations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching association:', error);
    throw error;
  }
};

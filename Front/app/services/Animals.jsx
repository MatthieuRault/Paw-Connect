import api from './axiosConfig';

// Animals router
export async function getAllAnimals() {
  try {
    const response = await api.get('animals');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAnimalByUserId(id) {
  try {
    const response = await api.get(`animals/${id}`, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createAnimal(animal) {
  try {
    const response = await api.post('animals', animal, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateAnimal(id, animal) {
  try {
    const response = await api.put(`animals/${id}`, animal, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteAnimal(id) {
  try {
    const response = await api.delete(`animals/${id}`,{
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

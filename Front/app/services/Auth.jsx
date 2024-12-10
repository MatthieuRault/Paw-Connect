import api from "./axiosConfig";

// Route Auth
export async function login(user) {
  try {
    const response = await api.post("auth/login", user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function register(user) {
  try {
    const response = await api.post("auth/register", user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

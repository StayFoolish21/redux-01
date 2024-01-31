// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-car-rental.binaracademy.org',
});

export const loginApi = async (email, password) => {
  try {
    const response = await api.post('/customer/auth/login', {
      email,
      password,
    });
    
    console.log (response)
    return response.data;
  } catch (error) {
    console.log (error)
    throw error.response ? error.response.data.message : error.message;
    
  }
};

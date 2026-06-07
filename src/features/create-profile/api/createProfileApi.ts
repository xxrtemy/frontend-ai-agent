// createProfileApi.ts

import axios from 'axios';

export const createProfile = async (data: CreateProfileSchema) => {
  try {
    const response = await axios.post('http://localhost:8080/createProfile', data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании профиля:', error);
    throw error;
  }
};
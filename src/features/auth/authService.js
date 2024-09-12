import axios from "axios";

const API_URL = 'https://authenticationeskills.vercel.app/api/user'

export const register = async (formData) => {
  const response = await axios.post(API_URL + "/register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export const login = async (formData) => {
  const response = await axios.post(API_URL + "/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

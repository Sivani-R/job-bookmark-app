
import axios from 'axios';

const API_URL = 'https://testapi.getlokalapp.com/common/jobs?page=1';

export const fetchJobs = async (page) => {
  const response = await axios.get(`${API_URL}?page=${page}`);
  return response.data;
};

export const fetchJobDetails = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

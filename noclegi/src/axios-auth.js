import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  params: {
    key: "AIzaSyCH_enzh8bbNUzptaCUhoUZ970a9VUm-lg"
  }
});

export default instance;
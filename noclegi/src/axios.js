import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hotels-test-f522d-default-rtdb.firebaseio.com/'
});

export default instance;
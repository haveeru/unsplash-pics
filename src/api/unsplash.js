import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID KZFILu2UG23wX_TdrhI3sjUImHtWdwhv5b8r0ssrwoE'
  }
});

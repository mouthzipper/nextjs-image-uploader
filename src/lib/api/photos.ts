import axios from 'axios';

import { SERVER_BASE_URL } from '~/lib/utils/constants';
import { getQuery } from '~/lib/utils/getQuery';

const PhotosAPI = {
  all: (skip = 0, limit = 100) =>
    axios.post(`${SERVER_BASE_URL}/photos/list`, { skip, limit }),
  upload: (formData) => {
    console.log('form', formData);
    try {
      return axios({
        method: 'put',
        url: `${SERVER_BASE_URL}/photos`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      return error.response;
    }
  },
};

export default PhotosAPI;

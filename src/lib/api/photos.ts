import axios from 'axios';

import { SERVER_BASE_URL, LIMIT_PER_PAGE } from '~/lib/utils/constants';

const PhotosAPI = {
  all: (skip = 0, limit = LIMIT_PER_PAGE) =>
    axios.post(`${SERVER_BASE_URL}/photos/list`, { skip, limit }),
  upload: (formData) => {
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
  delete: (album: string, fileName: string) => {
    try {
      return axios.delete(
        `${SERVER_BASE_URL}/photos/${album.toLocaleLowerCase()}/${fileName}`
      );
    } catch (error) {
      return error.response;
    }
  },
  deleteAll: () => {
    try {
      return axios.delete(`${SERVER_BASE_URL}/photos`);
    } catch (error) {
      return error.response;
    }
  },
};

export default PhotosAPI;

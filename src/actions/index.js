import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = 	'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=nodasecret456';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
};

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}${API_KEY}`, values)
  .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
};

export function fetchPost(id) {
  console.log(`fetching post with id: ${id}`);
  const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
};

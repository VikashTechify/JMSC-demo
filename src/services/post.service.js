import axios from "axios";
let baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchPost = () => {
  return axios.get(`${baseUrl}/posts`);
};

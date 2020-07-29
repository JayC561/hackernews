import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const topStories = `${baseUrl}topstories.json`;

const getAllIds = () =>{
  const request =  axios.get(topStories)
  return request.then(res => res.data);
}

export default {
  getAllIds
}

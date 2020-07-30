const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStories = `${baseUrl}newstories.json`;
const topStories = `${baseUrl}topstories.json`;
const storyUrl = `${baseUrl}item/`
const increment = 20;
let stories = [];
let totalIds;
let start = 0;
let finish = increment;

const getAllIds = (url) =>{
  const request =  axios.get(url)
  return request.then(res => res.data);
}

const getStory = (id) =>{
  const request = axios.get(`${storyUrl}${id}.json`);
  return request.then(res => res.data);
}

const gettingIds = async (url) =>{
  totalIds = await getAllIds(url).then(async ids => await ids);
}

const savingStories = async () =>{
  console.log({start, finish});
  for(let i = start; i < finish; i++){
    getStory(totalIds[i])
      .then(story =>{
        stories.push(story);
    })
  }
}

app.get('/', (req, res) =>{
  start = 0;
  finish = 20;
  stories = [];
  savingStories();
  setTimeout(() =>{
    res.json(stories);
  }, 2000)
})

app.get('/next', (req, res) =>{
  start = start + increment;
  finish = finish + increment;
  if(finish > totalIds){
    const temp = finish - totalIds;
    finish = finish - increment + temp;
  }
  savingStories();
  setTimeout(() =>{
    res.json(stories);
  }, 2000)
})

app.get('/top', (req, res) =>{
  gettingIds(topStories);
  start = 0;
  finish = 0;
  stories = [];
  savingStories();
  setTimeout(() =>{
    res.json(stories);
  });
})

gettingIds(newStories);

const PORT = 3001;
app.listen(PORT, () =>{
  console.log(`Server is running at port: ${PORT}`);
})

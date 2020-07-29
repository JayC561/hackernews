import React from 'react';
import Story from './Story';
import services from './services';

const ShowStories = ({ids, story, setStory}) =>{
  useEffect(() =>{
    const totalStory = 30;
    for(let i = 0; i<totalStory; i++){
      services.getStory(id[i])
        .then(story => setStory(story));
    }
  }, []);

  return(
    <Story stories = {story}/>
  );
}

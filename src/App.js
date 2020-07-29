import React, {useState, useEffect} from 'react';
import services from './services';
import ShowStories from './ShowStories';

const App = () =>{
  const [storyIds, setStoryIds] = useState([]);
  const [story, setStory] = useState([]);
  useEffect(() =>{
    services.getAllIds()
      .then(ids =>{
        setStoryIds(ids);
      })
  }, [])

  return(
    <div>
      <ShowStories ids = {storyIds} story = {story} setStory = {setStory}/>
    </div>
  );
}

export default App;

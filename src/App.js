import React, {useState, useEffect} from 'react';
import services from './services';
import ShowStories from './ShowStories';

const App = () =>{
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() =>{
    services.getAllIds()
      .then(ids =>{
        setStoryIds(ids);
      })
  }, [])

  return(
    <div>
      <ShowStories ids = {storyIds}/>
    </div>
  );
}

export default App;

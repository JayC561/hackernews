import React,{useState, useEffect} from 'react';
import axios from 'axios';

const App = () =>{
  const [stories, setStories] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:3001/')
      .then(res =>{
        setStories(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
  }, []);

  const handleClick = () =>{
    axios.get('http://localhost:3001/next')
      .then(res => {
        setStories(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
  }

  if(stories.length){
    let count = 1;
    return(
      <div>
        {
          stories.map(story =>{
            return(
              <div>
                <p key = {story.id}>
                  <span><b>{count++}.</b></span>
                  <a href = {story.url} target = "_blank">{story.title}</a>
                </p>
              </div>
            );
          })
        }
        <button onClick = {handleClick}>more</button>
      </div>
    )
  }

  return <p>loading...</p>
}

export default App;

import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Story from './Story';
import Header from './Header';

const App = () =>{
  const [stories, setStories] = useState([]);
  useEffect(() =>{
    handleClickNew();
  }, []);

  const handleClickNext = () =>{
    axios.get('http://localhost:3001/next')
      .then(res => {
        setStories(stories.concat(res.data));
      })
      .catch(err =>{
        console.log(err);
      })
  }

  const handleClickTop = () =>{
    axios.get('http://localhost:3001/top')
      .then(res =>{
        setStories(res.data);
      })
      .catch(err =>{
        console.log(err);
      })
  }

  const handleClickNew = () =>{
    axios.get('http://localhost:3001/')
      .then(res =>{
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
        <Header handleClickNew = {handleClickNew} handleClickTop = {handleClickTop}/>
        <div className = "stories">
          {
            stories.map(story =>{
              return(
                <Story story = {story} count = {count++}/>
              );
            })
          }
          <button onClick = {handleClickNext}>more</button>
        </div>
      </div>
    )
  }

  return <p>loading...</p>
}

export default App;

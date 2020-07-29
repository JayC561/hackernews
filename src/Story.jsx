import React,{useState, useEffect} from 'react';
import services from './services';

const Story = ({stories}) =>{
  if(story.length > 0){
    return(
      {
        stories.map(story =>{
          <h1 key = {story.id}>{story.title}</h1>
        })
      }
    );
  }
}

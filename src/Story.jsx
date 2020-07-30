import React from 'react';

const Story = ({story, count}) =>{
  const date = new Date(story.time * 1000);
  return(
    <div>
      <p key = {story.id}>
        <span><b>{count}. </b></span>
        <a href = {story.url} target = "_blank">{story.title}</a>
      </p>
      <p className = "story-meta">
        by {story.by} published on <time datetime = {date.toString()}>{date.toString()}</time>
      </p>
    </div>
  );
}

export default Story;

import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = (props) => {
  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{props.storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
            console.log(Stories);
            // INSTEAD OF returning the div below, return a Story component
            // Be sure to pass down the correct props!
            
            return(<Story key={index}
                          img = {story.img}
                          title = {story.title}
                          authImg = {story.authImg}
                          authName = {story.authName}
                          estTime = {story.estTime} 
                          />)
          })
        }
      </div>
    </div>
  )
}

              // <img src={story.img}/>
              // <p>{story.desc}</p>
              // <img src={story.authImg}/>
              // <p>{story.authName}
              // <br/>{story.estTime}</p>
export default Stories;

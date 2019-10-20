import React from 'react'
import Story from './Story'

class StoryContainer extends React.Component {


    state = {
        stories: [],
        story_id: []
      }
      
      
      componentDidMount(){
        fetch('http://localhost:3000/stories')
        .then(res => res.json())
        .then(data => this.setState({stories: data}))
      }

  

   
     

allStories=()=>{
   return this.state.stories.map(story =>{
      return <Story key={story.id} story={story} />
  })
  }

    render(){
        return (
            <>
            <div className="storyCards">
                <h1>Here are your stories</h1>
                {this.allStories()}
                </div></>
                )
            }

}

export default StoryContainer
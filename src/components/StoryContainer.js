import React from 'react'
import Story from './Story'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

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
      return <Story key={story.id} story={story}/> 
  })
  }

    render(){
        return (
            <>
          
             <h3 className="headerStyle">previously saved stories</h3>
                <br />
                {this.allStories()}
                <br />
                <br />
                <Link exact to="/home" > 
                 <button className="myHomeButton">Home</button>
                 </Link>
                 <br />   
              </>
                )
            }

}

export default StoryContainer
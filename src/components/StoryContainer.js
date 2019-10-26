import React from 'react'
import Story from './Story'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

class StoryContainer extends React.Component {


    state = {
        stories: [],
        displayedStories: [],
        story_id: [],
        user: [],
        owned: ""
      }

      sortMyStories = (event) => {

          if (event === "true")
          this.setState({
            displayedStories: 
            this.state.stories.filter(
            story => story.user.id === 1
            
            )
            });
            
         {
              if (event === "false")
            this.setState({
            displayedStories: this.state.stories
            })
            }}



            sortByRadio=(event)=>{
    
                if(event === "true"){
                this.setState({displayedStories : this.state.displayedStories.sort((thingA, thingB) => thingA.created_by > thingB.created_by ? 1 : -1)})
                }
                
                else if (event === "false") {
              this.setState({displayedStories : this.state.displayedStories.sort((thingA, thingB) => thingA.created_by < thingB.created_by ? 1 : -1)})
            } }
                


            
            

      componentDidMount(){
        fetch('http://localhost:3000/stories')
        .then(res => res.json())
        .then(data => this.setState({stories: data,
          displayedStories: data}))
      }


    allStories=()=>{
    return this.state.displayedStories.map(story =>{
    return <Story key={story.id} story={story}/> 
  })
  }


render(){
  return (
        <>
     

            <br />

            <div>
            <div className="headerStyle">
            <h2> previously saved stories </h2>

<label>
<input onChange={(event)=>this.sortByRadio(event.target.value)} name="sort" type="radio" value="true" checked={null}/>
   latest post
</label>

<label></label>

<label>
<input onChange={(event)=>this.sortByRadio(event.target.value)} name="sort" type="radio" value="false" checked={null}/>
    oldest post
</label>
<br/>

<label>

<select className="dropdown" onChange={(event)=>this.sortMyStories(event.target.value)}>
<option value="All">select</option>
<option value="true">my stories</option>
<option value="false">all stories</option>

</select>
</label>

<br/>


</div>
</div>
<br/>

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
import React from 'react'
import Success from './Success'
import { Link } from 'react-router-dom'



class Story extends React.Component {


 
    state = {
        yourStory: []
    }


    componentDidMount(){
        fetch(`http://localhost:3000/stories/${this.props.story.id}`)
        .then(res => res.json())
        .then(data => this.setState({yourStory: [data] }) 
        )}

        



    render(){
        return (
            
            <div >
           <Link to={{ pathname: '/home/stories/yourstory', state: { story: this.state.yourStory} }}>   
           <ul ><button className="myButton">{this.props.story.questionThree}</button></ul></Link>
        </div>
        )
    }

}

export default Story
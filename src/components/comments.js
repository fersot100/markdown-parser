import React from 'react';
import Comment from './comment';

const comments = [{
  votes: 12,
  body: "I really like the part about lorem ipsum",
  student: {
    name: 'Dustin Podell',
    school: 'Granada Hills High Scool',
    grade: '12'
  }
},{
  votes: 7,
  body: "How do I add a GameObject to the Unity hierarchy",
  student: {
    name: 'James Miers',
    school: 'Kennedy High Scool',
    grade: '10'
  }
},{
  votes: 2,
  body: "I am learning so much good code",
  student: {
    name: 'Juan Erazo',
    school: 'Wilson High Scool',
    grade: '11'
  }
}]

class Comments extends React.Component {

  state = {comments: []};

  componentDidMount(){
    this.setState(() => ({comments}));
  }

  handleOnLike = (index) => {
    
    const newState = this.state;
    newState.comments[index].votes++;

    this.setState(() => ({
      ...newState
    }))
  }

  render(){
    return (
        <div className="comments">
          <div className='comments__info'>
            <h1>Comments</h1>
            <div className='comments__info-input'>
              <input className='input' type='text' placeholder='Search for a question' />
              <button className='button'>Ask a new question</button>
            </div>
          </div>
          <div className='comments__body'>
            {this.state.comments.sort((a, b) => b.votes - a.votes)
                                .map((comment,i) => 
              <Comment {...comments[i]} index={i} onLike={this.handleOnLike}/>
            )}
          </div>
        </div>
    )
  }
}
   

export default Comments;
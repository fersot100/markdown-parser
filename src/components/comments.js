import React from 'react';
import Comment from './comment';

const comments = [{
  title: 'Lorem Ipsum is nice',
  body: "I really like the part about lorem ipsum",
  student: {
    name: 'Dustin Podell',
    school: 'Granada Hills High Scool',
    grade: '12'
  }
},{
  title: 'I am Confused',
  body: "How do I add a GameObject to the Unity hierarchy",
  student: {
    name: 'James Miers',
    school: 'Kennedy High Scool',
    grade: '10'
  }
},{
  title: 'This lesson really taught me a lot',
  body: "I am learning so much good code",
  student: {
    name: 'Juan Erazo',
    school: 'Wilson High Scool',
    grade: '11'
  }
}]

const Comments = props => {
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
            {comments.map((comment,i) => 
              <Comment {...comments[i]}/>
            )}
          </div>
        </div>
    )
}
   

export default Comments;
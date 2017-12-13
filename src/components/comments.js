import React from 'react';
import Comment from './comment';

const comments = [{
  votes: 12,
  body: "I really like the part about lorem ipsum",
  student: {
    name: 'Dustin Podell',
    school: 'Granada Hills High Scool',
    grade: 12
  }
},{
  votes: 7,
  body: "How do I add a GameObject to the Unity hierarchy",
  student: {
    name: 'Alan Sitomer',
    school: 'Kennedy High Scool',
    grade: 10
  }
},{
  votes: 2,
  body: "I am learning so much good code",
  student: {
    name: 'Juan Erazo',
    school: 'Wilson High Scool',
    grade: 11
  }
}]

class Comments extends React.Component {

  state = {
    comments: [],
    questionOpen: false,
    commentText:'',
    nameText:'',
    schoolText:'',
    error: ''
  };

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

  openQuestion = () => {
    this.setState((prevstate) => ({
        openQuestion: !prevstate.openQuestion
    }));
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const namelength = this.state.nameText.length;
    const schoolLength = this.state.schoolText.length;
    const commentlength = this.state.commentText.length;

    if(namelength > 0 && schoolLength > 0 && commentlength > 0){
      const newComment = {
        votes: 0,
        body: this.state.commentText,
        student: {
          name: this.state.nameText,
          school: this.state.schoolText,
          grade: 12
        }
      }

        this.setState((prevstate) => ({
          comments: [...prevstate.comments, newComment],
          openQuestion: !prevstate.openQuestion,
          commentText:'',
          nameText:'',
          schoolText:'',
          error: ''
        }));
 
    }else{
      this.setState(() => ({error: 'All fields are required'}));
    }
  }

  onNameChange = (e) => {
    const nameText = e.target.value; 
    this.setState(() => ({ nameText }));
  }

  onSchoolChange = (e) => {
    const schoolText = e.target.value; 
    this.setState(() => ({ schoolText }));
  }

  onCommentTextChange = (e) => {
    const commentText = e.target.value; 
    this.setState(() => ({ commentText }));
  }

  render(){
    return (
        <div className="comments">
          <div className='comments__header'>
            <div className='comments__info'>
              <div className='comments__info-input'>
                <h2 className="comments__header">Discussion</h2>
                <input className='input' type='text' placeholder='Search for a question' />
                <button onClick={this.openQuestion} className='button'>Ask a new question</button>
              </div>
            </div>
            <div className={!this.state.openQuestion ? 'comments__newquestion comments__newquestion-collapsed' : 'comments__newquestion'}>
              <form onSubmit={this.onFormSubmit}> 
                  <div className='comments__forminput-top'>
                    <div className='comments__forminput'>
                      <p>Name</p>
                      <input name='name' className='input__scalable' type='text' placeholder='Your Name' value={this.state.nameText} onChange={this.onNameChange}/>
                    </div>
                    <div  className='comments__forminput'> 
                      <p>School</p>
                      <input name='school' className='input__scalable' type='text' placeholder='Your School' value={this.state.schoolText} onChange={this.onSchoolChange}/>
                    </div>
                  </div>
                  <div className='comments__forminput'>
                    <p>Comment</p>
                    <textarea name='comment' className='input__scalable input-textarea' type='text' placeholder='Write your comment here...'  value={this.state.commentText} onChange={this.onCommentTextChange}/>
                    {this.state.error && <p className='comment__error'>{this.state.error}</p>}
                    <button className='button'>Submit</button>
                  </div>
              </form>
            </div>
          </div>
          <div className='comments__body'>
            {this.state.comments.length > 0 && this.state.comments.sort((a, b) => b.votes - a.votes)
                                .map((comment,i) => 
              <Comment {...this.state.comments[i]} index={i} onLike={this.handleOnLike} key={i}/>
            )}
          </div>
        </div>
    )
  }
}
   

export default Comments;
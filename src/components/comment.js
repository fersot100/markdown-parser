import React from 'react';

//This may be expanded for the detailed view window
//TODO: add moment.js for timestamps
export const comment = ({votes, body, student, index, onLike}) => (
  <div className='comment'>
    <div className='comment__votes'>
      <p>{votes}</p>
    </div>
    <div>
      <div className='comment__student'>
        <h3 className='comment__student-name'>{student.name}</h3>
        <p className='comment__student-school'>{student.school}</p>
      </div>
        <p>{body}</p>
        <div className='comment__button'>
          <button className='button button--reply'>Reply</button>
          <button onClick={() => onLike(index)} className='button button--reply'>Like</button>
        </div>
      </div>
  </div>
);

export default comment;
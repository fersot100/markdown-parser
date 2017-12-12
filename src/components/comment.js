import React from 'react';

export const comment = ({title, body, student}) => (
  <div className='comment'>
      <div className='comment__student'>
        <h3 className='comment__student-name'>{student.name}</h3>
        <p className='comment__student-school'>{student.school}</p>
      </div>
        <p>{body}</p>
  </div>
);

export default comment;
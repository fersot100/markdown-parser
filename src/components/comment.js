import React from 'react';

export const comment = ({title, body, student}) => (
  <div className='comment'>
    <div className='comment__student'>
      <h3 className='comment__student-name'>{student.name}</h3>
      <p>{student.school}</p>
      <p>Grade: {student.grade}</p>
    </div>
    <div className='comment__data'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  </div>
);

export default comment;
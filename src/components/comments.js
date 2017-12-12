import React from 'react';

class Student {
    constructor(name, grade, course){
        this.name = name;
        this.grade = grade;
        this.course = course;
        this.comments = [];
    }
    addComment = comment => {
        this.comments.push(comment);
    }
}

const Comments = props => {
    
    const studentList = props.students;

    return (
        <div className="Comments">
        
        </div>
    )
   

}
   

export default Comments;
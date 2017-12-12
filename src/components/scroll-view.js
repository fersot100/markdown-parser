import React from 'react';
import ReactMarkdown from 'react-markdown';
import loremIpsum from '../data/loremIpsum.json';
import '../styles/scrollview.css';

const ScrollView = props => {

    return (
        <div className="scrollView">
            <ReactMarkdown source={props.markdown}/>
        </div>
    )
  
}

export default ScrollView;
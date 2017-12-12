import React from 'react';
import loremIpsum from '../data/loremIpsum.json';

const ScrollView = props => (
    <div className="scrollView">
        <p>{loremIpsum.content}</p>
    </div>
)

export default ScrollView;
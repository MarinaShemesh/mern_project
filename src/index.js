import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox 
  url='http://localhost:3001/api/comments'//here the front is talking to the back
  pollInterval={2000} /> ,
  document.getElementById('root')
);


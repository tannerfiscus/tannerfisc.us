import React from 'react';
import logo from './logo.svg';
import './App.css';

import PostViewer from './components/PostViewer';
import Post from './components/Post';

function App() {
  return (
    <div>
      <header>
        Hi
      </header>
      <PostViewer />
      <hr />
      <Post />
    </div>
  );
}

export default App;

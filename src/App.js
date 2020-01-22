import React from 'react';
import Header from './components/layout/Header';
import Write from './components/Write';
import Result from './components/Result';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Header />
        <Write />
        <Result />
      </div>
    </div>
  );
}

export default App;

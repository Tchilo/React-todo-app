import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoContainer from './Components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

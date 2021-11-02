import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from "./functionBased/Components/TodoContainer"
import "./functionBased/App.css";
import { HashRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <TodoContainer />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

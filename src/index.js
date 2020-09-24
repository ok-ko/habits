import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HabitTracker from "./HabitTracker";


const Habits = [
    {title: 'Study English', isDone: false},
    {title: 'Study React', isDone: true},
    {title: 'Drink water', isDone: false},
    {title: 'No smoking', isDone: false},
    {title: 'Smile', isDone: true}
];


ReactDOM.render(
  <React.StrictMode>
      {<HabitTracker habits = {Habits}/>}
  </React.StrictMode>,
    document.getElementById('root')

);


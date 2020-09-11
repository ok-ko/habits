import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DayPlan from './DayPlan'


const Habits = [
    {title: 'Study English', isDone: false},
    {title: 'Study React', isDone: false},
    {title: 'Drink water', isDone: false},
    {title: 'No smoking', isDone: false}
];

ReactDOM.render(
  <React.StrictMode>
      <DayPlan habits = {Habits}/>
  </React.StrictMode>,
    document.getElementById('root')

);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DayPlan from './DayPlan'


const Habits = [
    {title: 'Study English', isDone: false},
    {title: 'Study React', isDone: true},
    {title: 'Drink water', isDone: false},
    {title: 'No smoking', isDone: false},
    {title: 'Smile', isDone: true}
];

const doneMessage = `"Звичка - друга натура"`;



ReactDOM.render(
  <React.StrictMode>
      <DayPlan habits = {Habits} doneMessage = {doneMessage}/>
  </React.StrictMode>,
    document.getElementById('root')

);


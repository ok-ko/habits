import React from "react";
import './App.css'
import DayPlan from "./DayPlan";

class HabitTracker extends React.Component{
  constructor(props) {
    super(props);

    //********************---------1-------------***************
    // без цього можна обходитися????
    // this.now = this.now.bind(this);
    // this.ID = this.ID.bind(this);

    this.state = {
      habitsList: [
        {id:0, title:'Study English'},
        {id:1, title:'Study React'},
        {id:2, title:'Drink water'},
        {id:3, title:'No smoking'},
        {id:4, title:'Smile'}
        ],
      reportSetting: [
        {id: 0, title: 'Study English', isDone: false},
        {id: 1, title: 'Study React', isDone: true},
        {id: 2, title: 'Drink water', isDone: false},
        {id: 3, title: 'No smoking', isDone: false},
        {id: 4, title: 'Smile', isDone: false}
      ],
      reportDate: this.now(),
      Report: [],
      activeMode: 'execution',
      // activeMode: 'configuration',
      saveButtonColor:'#4e8dc6',
      settingButtonColor:'#6c757d',
    }
    };

  now() {
    let curDate = new Date();
    let year = curDate.getFullYear();
    let month = String(curDate.getMonth()+1).padStart(2, '0');
    let day = String(curDate.getDate()).padStart(2,'0');
    return year+'-'+month+'-'+day
  };

  ID () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  //note: active button #4e8dc6' blue,    inactive button #6c757d gray

  handleActiveModeChange = (value,active, inactive) => {
    this.setState({activeMode:value});
    if (value === 'execution') {
      this.setState({saveButtonColor:active, settingButtonColor:inactive},
    )} else if (value === 'configuration') {
      this.setState({saveButtonColor: inactive, settingButtonColor:active},
      )
    }
  };

  handleDateChange = (reportDate) => {
    this.setState({reportDate})
  };

  handleCheckboxChange = (targetId) => {
    this.setState({
      ...this.state,
      reportSetting: this.state.reportSetting.map(list => {
        if (String(list.id) === String(targetId)) {
          return {
            ...list,
            isDone: !list.isDone,
          }
        } else {
          return list;
        }
      })
    })
  };

  handleHabitListChange = (targetId, targetTitle) => {
    this.setState({
      ...this.state,
      habitsList: this.state.habitsList.map(list => {
        if (String(list.id) === String(targetId)) {
          return {
            ...list,
            title: targetTitle,
          }
        } else {
          return list;
        }
      })
     })
  };

  addHabitListItem = (habitsList, item) => {
    habitsList.push({
      id:this.ID(),
      title:item,
    });
    this.setState({habitsList});
};

  delHabitListItem = (habitsList, item) => {
    habitsList.splice(item,1);
    this.setState({habitsList});
  };

  updateReport = (Report, date, reportSetting) => {
    let smthId = Report.find(smth => smth.date === date);
    if (!smthId) {
      Report.push({
        id: this.ID(),
        date: date,
        reportSetting:reportSetting, });
      this.setState({Report});
    } else {alert('Запис за ' +date+' уже існує')}
  };

  render() {
    return (
      <div className="HabitTracker">
        <div>
          <DayPlan
            habitsList = {this.state.habitsList}
            reportSetting = {this.state.reportSetting}
            reportDate = {this.state.reportDate}
            updateReportDate = {this.handleDateChange}
            Report = {this.state.Report}
            updateReport = {this.updateReport}
            handleCheckboxChange = {this.handleCheckboxChange}
            handleHabitListChange = {this.handleHabitListChange}
            addHabitListItem = {this.addHabitListItem}
            delHabitListItem = {this.delHabitListItem}
            activeMode = {this.state.activeMode}
            handleActiveModeChange = {this.handleActiveModeChange}
            saveButtonColor = {this.state.saveButtonColor}
            settingButtonColor = {this.state.settingButtonColor}
          />
        </div>
      </div>
    );
  }
}

export default HabitTracker;
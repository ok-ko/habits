import React from "react";
import './App.css'
import Top from "./Top";
// import TopMessage from "./components/TopMessage";
import FillHabits from "./FillHabits/FillHabits";
import EditHabits from "./EditHabits/EditHabits";
import Stats from "./stats/Stats";

class DayPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Message:  '',
      reportMessage: 'report',
    };
  }

	onChangeValue = (event) => {
		if (event.target.id === 'execution') {
			this.updateMessage('check your habits');
			this.props.handleActiveModeChange('execution', '#4e8dc6','#6c757d');
		}
		else {
			this.updateMessage('habit settings');
			this.props.handleActiveModeChange('configuration','#4e8dc6','#6c757d');
		}
	}

  updateMessage = (value) => {
    this.setState({ Message: value });
  };
	//
  updateReportMessage =(value) => {
    this.setState({reportMessage:value});
  };

  render() {
    return (
      // <div className="DayPlan">

        <div>
	        <Top Message={this.state.Message}/>
		      <div>
			      {/*<div style={{width:400 }}>*/}
				  <div style={{ width: '100%' } }>
					  {/*<div className="btn-group btn-group-toggle" data-toggle="buttons" onClick={this.onChangeValue}>*/}
						{/*  <label className="btn btn-secondary"*/}
						{/*         style={{backgroundColor:this.props.saveButtonColor}}>*/}
						{/*	  <input type="radio" name="options" id="execution"/> execution*/}
						{/*  </label>*/}
						{/*  <label className="btn btn-secondary"*/}
						{/*         style={{backgroundColor:this.props.settingButtonColor}}>*/}
						{/*	  <input type="radio" name="options" id="configuration"/> configuration*/}
						{/*  </label>*/}
					  {/*</div>*/}


				  {/*dropdown не працює*/}
				  <div className="btn-group" role="group">
					  <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle"
					          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  тут має бути Stats
					  </button>
					  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
						  <a className="dropdown-item" href="#">Dropdown link</a>
						  <a className="dropdown-item" href="#">Dropdown link</a>
					  </div>
				  </div>
			  </div>


	        <br/><br/>

		      {this.props.activeMode==='execution'?
			      <FillHabits habitsList = {this.props.habitsList}
			                  updateReportValues = {this.props.updateReportValues}
			                  handleCheckboxChange = {this.props.handleCheckboxChange}
			                  reportValues = {this.props.reportValues}
			                  reportMessage = {this.state.reportMessage}
			                  updateMessage = {this.updateMessage}
			                  updateReport = {this.props.updateReport}
			                  Report = {this.props.Report}
			                  reportDate = {this.props.reportDate}
			                  handleDateChange = {this.props.handleDateChange}
			                  updateReportMessage = {this.updateReportMessage}
			                  resultShowChange ={this.props.resultShowChange}

			      />
			      :
			      <EditHabits habitsList = {this.props.habitsList}
			                  delHabitListItem = {this.props.delHabitListItem}
			                  handleHabitListChange = {this.props.handleHabitListChange}
			                  addHabitListItem = {this.props.addHabitListItem}
			      />
		      }


		      <Stats updateMessage={this.updateMessage}
		             Report = {this.props.Report}
		             updateReportMessage = {this.updateReportMessage}
		             habitsList = {this.props.habitsList}
		             resultShowChange ={this.props.resultShowChange}
		             updateResult = {this.props.updateResult}
		      />

          </div>
        </div>
      // </div>
    );
  }
}

export default DayPlan;
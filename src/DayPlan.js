import React from "react";
import './App.css'


class StatButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: 'all you need to know about your habits'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateMessage(this.state.name);

    // тут треба вивести весь Report

	  let updateStatMessage ="";
	  for (let i=0; i< this.props.Report.length;i++) {

		  updateStatMessage +=  (
		  	this.props.Report[i].date
			  +  ": "
			  +
		    this.props.Report[i].reportSetting.map(
		    	(h) => h.title + (h.isDone?' + ':' - ')
		    )
		  )
		  + "\n";
		//  ????????????????чому не працює перенос рядка????????????????????????
	  }
     this.props.updateReportMessage(updateStatMessage);
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-secondary"
        onClick= {() => this.handleClick()}
      >
        Stat
      </button>
    );
  }
}

class SettingsButton extends React.Component {
  state = {
    name: 'habit settings'
  };

  handleClick() {
    this.props.updateData(this.state.name);
    this.props.handleActiveModeChange('configuration','#4e8dc6','#6c757d');
  }

  render() {
    return (
      <button
        type="button"
        style = {{background:this.props.buttonColor}}
        className="btn btn-secondary"
        onClick= {() => this.handleClick()}
      >
        Configure
      </button>
    );
  }
}

class ExecuteModeButton extends React.Component {
	handleClick() {
		this.props.handleActiveModeChange('execution', '#4e8dc6','#6c757d');
	}

	render() {
		return (
			<button
				type="button"
				style = {{background:this.props.buttonColor}}
				className="btn btn-secondary"
				onClick= {() => this.handleClick()}
			>
				Execute
			</button>
		);
	}
}

class SaveButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: `Звички за цей день збережено`,
    }
  }

  handleClick() {
    this.props.updateMessage(this.state.name);
    this.props.updateReport(
      this.props.Report,
      this.props.reportDate,
      this.props.reportSetting
    );

    let updateReportMessage =
      this.props.Report[this.props.Report.length-1].date
      +  ": " +
      this.props.Report[this.props.Report.length-1].reportSetting.map(
        (h) =>
          h.title + (h.isDone?' + ':' - ')
      );
    this.props.updateReportMessage(updateReportMessage);
  }

    render() {
	    return (
		    <button
			    type="button"
			    className="btn btn-outline-secondary"
			    style={{width:400}}
			    // className="btn btn-secondary"
			    onClick= {() => this.handleClick()}
		    >
			    Save
		    </button>
	    );
    }
}


class ConfigureHabit extends React.Component {
	constructor(props) {
		super(props);
		this.handleHabitListChange = this.handleHabitListChange.bind(this);
		this.delHabitListItem = this.delHabitListItem.bind(this);
	}

	handleHabitListChange(e) {
		this.props.handleHabitListChange(e.target.id, e.target.value);
	}

	delHabitListItem() {
		this.props.delHabitListItem(this.props.habitsList, this.props.indexItem)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.delHabitListItem}>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							aria-describedby="button-addon4"
							defaultValue={this.props.habit.title}
							onChange={this.handleHabitListChange}
							id={this.props.habit.id}
						/>
						<div className="input-group-append" id="button-addon4">
							<input
								className="btn btn-outline-secondary"
								type="submit"
								value = "Delete"
							>
							</input>
							= {this.props.habit.id} + {this.props.habit.title} + {this.props.indexItem}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

class CheckHabit extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(e) {
    this.props.handleCheckboxChange(e.target.id);
  }

  render() {
    return (
      <div className="input-group mb-3" style={{width:400}}>
        {/*<div className="input-group-prepend">*/}
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={this.handleCheckboxChange}
              defaultChecked={this.props.isDone}
              id={this.props.id}
            />
          </div>
        {/*</div>*/}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          value={this.props.title}
          readOnly={true}
        />
        = {this.props.id} + {String(this.props.isDone)} + {this.props.title}
      </div>
    )
  }
}

function DayAlert(props) {
  const {Message} = props;
  return (
    <div className="alert alert-light"
         role="alert"
         align="center"
         style={{width:400}} >
      {Message}
    </div>
  )
}

class DayHead  extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateReportDate(e.target.value);
  }

  render() {
    const reportDate = this.props.reportDate;
    return(
      <div className="DayPlan">
        <div className="alert alert-dark" role="alert"  align="center" style={{width:400}}>
          Habit tracker
        </div>

        {/*<div className="input-group input-group-sm mb-3" style={{width:400}}> </div>*/}
        <div className="input-group input-group-sm mb-3" style={{width:400}}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">date</span>
          </div>
          <input type="date" className="form-control"
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-sm"
                 defaultValue={reportDate}
                 onChange={this.handleChange}
          />
        </div>
        <DayAlert Message = {this.props.Message}/>
      </div>
    )
  }
}

class DayPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Message:  'start message about useful habits',
      reportMessage: '',
    }
  }

  updateMessage = (value) => {
    this.setState({ Message: value });
  };

  updateReportMessage =(value) => {
    this.setState({reportMessage:value});
  };

	addHabitListItem = () => {
		this.props.addHabitListItem(this.props.habitsList,"")
	};

  setMode = () => {
    if (this.props.activeMode === 'execution') {
      return (
        <div >
          {this.props.reportSetting.map((h, index) =>
            <CheckHabit
              title = {h.title}
              isDone = {h.isDone}
              handleCheckboxChange = {this.props.handleCheckboxChange}
              id = {h.id}
              key={index}/>)
          }
	        <SaveButton
		        reportSetting = {this.props.reportSetting}
		        updateMessage={this.updateMessage}
		        updateReportMessage={this.updateReportMessage}
		        reportDate = {this.props.reportDate}
		        updateReport = {this.props.updateReport}
		        Report = {this.props.Report}
	        />
	        <div>
		        <DayAlert Message={this.state.reportMessage}/>
	        </div>
        </div>
      )

    } else if (this.props.activeMode === 'configuration') {
      return (
        <div style={{width:400}}>
	        {this.props.habitsList.map((h,index) =>
	        <ConfigureHabit
		        habit = {h}
		        indexItem={index}
		        habitsList = {this.props.habitsList}
		        delHabitListItem = {this.props.delHabitListItem}
		        handleHabitListChange = {this.props.handleHabitListChange}
	        />)}
	        <button
		        type="button"
		        className="btn btn-outline-secondary"
		        style={{width:400}}
		        onClick={this.addHabitListItem}
	        >
		        Add new habit
	        </button>
        </div>
      )
    } else {
      return  (
        <div>
          Something is wrong with Active Mode
        </div>
      )
    }
  };

  render() {
    return (
      <div className="DayPlan">
        <div>
          <DayHead
            Message = {this.state.Message}
            updateReportDate = {this.props.updateReportDate}
            reportDate = {this.props.reportDate}
          />

          <div>
            <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
              <ExecuteModeButton
                handleActiveModeChange = {this.props.handleActiveModeChange}
                buttonColor = {this.props.saveButtonColor}
              />

              <SettingsButton
                updateData={this.updateMessage}
                handleActiveModeChange = {this.props.handleActiveModeChange}
                buttonColor = {this.props.settingButtonColor}
              />
            </div>

	          <br/><br/>

	          <div>
		          {/*---------2-------------*/}
		          {/*чому не хоче передаватися як параметр функції*/}
		          <this.setMode
			          activeMode = {this.props.activeMode}
		          />
	          </div>

            <div className="btn-group"  style={{width:400}}>
              <StatButton
                Report = {this.props.Report}
                updateMessage={this.updateMessage}
                updateReportMessage={this.updateReportMessage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DayPlan;
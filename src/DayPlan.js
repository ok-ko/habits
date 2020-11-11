import React from "react";
import './App.css'
import Top from "./Top";
import TopMessage from "./components/TopMessage";
import FillHabits from "./FillHabits/FillHabits";


function habitStat(item, Report, updateReportMessage) {
	let requiredHabit = item.title;
	let habitTracker = '';
	let countSuccess = 0;
	for (let i=0; i<Report.length;i++) {
		for (let j=0; j<Report[i].reportValues.length; j++) {
			if (Report[i].reportValues[j].title === requiredHabit) {
				if (Report[i].reportValues[j].isDone) {
					habitTracker +=  '+';
					countSuccess ++;
				}
				else {habitTracker +=  '-';}
			}
		}
	}
	let habitSuccess = countSuccess/Report.length*100 ;
	if (habitSuccess === 0) {
		habitSuccess = `Very difficult habit to instil`
	}
	else {
		habitSuccess = Math.round(habitSuccess) + '% of execution';
	}

	// updateReportMessage(
	// 	requiredHabit + ' ' +habitTracker + ' (' + habitSuccess + ')'
	// );
	console.log(requiredHabit + ' ' +habitTracker);
	console.log(habitSuccess);
}


class ExtendedStatButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {name: 'analytics'};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.updateMessage(this.state.name);
		this.props.habitsList.forEach(
			(item) => habitStat(
				item,
				this.props.Report,
				this.props.updateReportMessage));
	}

	render() {
		return (
			<button
				type="button"
				className="btn btn-secondary"
				onClick= {() => this.handleClick()}
			>
				Extended stat
			</button>
		);
	}
}

class StatButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: 'all you need to know about your habits'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateMessage(this.state.name);
    // let updateStatMessage ="";
	  	  // for (let i=0; i< this.props.Report.length;i++) {
	  		//   updateStatMessage +=  (
	  		//   	this.props.Report[i].date
	  		// 	  +  ": "
	  		// 	  +
	  		//     this.props.Report[i].reportValues.map(
	  		//     	(h) => h.title + (h.isDone?' + ':' - ')
	  		//     )
	  		//   )
	  		//   + "\n";
	  	  // }


	  let updateStatMessage =``;
	  for (let i=0; i< this.props.Report.length;i++) {
		  updateStatMessage += ` ${this.props.Report[i].date}:${this.props.Report[i].reportValues.map((h) => h.title + (h.isDone?' +':' -'))}
		  `;
	  }

	  console.log(updateStatMessage);
	  //  ????????????????чому не працює перенос рядка????????????????????????
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

// class SaveButton extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: `Звички за цей день збережено`,
//     }
//   }
//
//   handleClick() {
//     this.props.updateMessage(this.state.name);
//     this.props.updateReport(
//       this.props.Report,
//       this.props.reportDate,
//       this.props.reportValues
//     );
//
//     let updateReportMessage =
//       this.props.Report[this.props.Report.length-1].date
//       +  ": " +
//       this.props.Report[this.props.Report.length-1].reportValues.map(
//         (h) =>
//           h.title + (h.isDone?' + ':' - ')
//       );
//     this.props.updateReportMessage(updateReportMessage);
//   }
//
//     render() {
// 	    return (
// 		    <button
// 			    type="button"
// 			    className="btn btn-outline-secondary"
// 			    style={{width:400}}
// 			    onClick= {() => this.handleClick()}
// 		    >
// 			    Save
// 		    </button>
// 	    );
//     }
// }


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
						</div>
					</div>
				</form>
			</div>
		);
	}
}

// class CheckHabit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }
//
//   handleCheckboxChange(e) {
//     this.props.handleCheckboxChange(e.target.id);
//   }
//
//   render() {
// 	 return (
// 		 <div>
// 			 { this.props.updateReportValues(
// 				 this.props.reportValues,
// 				 this.props.habit,
// 				 false)}
//
// 			 <div className="input-group mb-3" style={{width:400}}>
// 				 <div className="input-group-text">
// 					 <input type="checkbox"
// 					        aria-label="Checkbox for following text input"
// 					        onChange={this.handleCheckboxChange}
// 					        defaultChecked={this.props.isDone}
// 					        id={this.props.id}
// 					 />
// 				 </div>
// 				 <input type="text"
// 				        className="form-control"
// 				        aria-label="Text input with checkbox"
// 				        value={this.props.title}
// 				        readOnly={true}
//
// 			 />
//
// 			 </div>
// 		 </div>
//     )
//   }
// }

// class FillHabits extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleDateChange = this.handleDateChange.bind(this);
// 	}
//
// 	handleDateChange(e) {
// 		this.props.handleDateChange(e.target.value);
// 	}
// 	render() {
//
// 		// 	const { activeMode, habitsList } = this.props;
// 		// 	const { handleDateChange } = this;
//
// 		const {habitsList} = this.props;
// 		// const {handleDateChange} = this;
// 		return(
// 			<div>
// 				<div className="input-group input-group-sm mb-3" style={{width:400}}>
// 					<div className="input-group-prepend">
// 						<span className="input-group-text" id="inputGroup-sizing-sm">date</span>
// 					</div>
// 					<input type="date" className="form-control"
// 					       aria-label="Sizing example input"
// 					       aria-describedby="inputGroup-sizing-sm"
// 					       defaultValue={this.props.reportDate}
// 					       onChange={this.handleDateChange}
// 					/>
// 				</div>
//
// 				{habitsList.map((h, index) =>
// 					<CheckHabit
// 						title = {h.title}
// 						isDone = {false}
// 						id = {h.id}
// 						key={index}
// 						habit = {h}
// 						handleCheckboxChange = {this.props.handleCheckboxChange}
// 						updateReportValues = {this.props.updateReportValues}
// 						reportValues = {this.props.reportValues}
// 					/>
// 				)
// 				}
// 				<SaveButton
// 					reportValues = {this.props.reportValues}
// 					updateMessage={this.props.updateMessage}
// 					updateReportMessage={this.props.updateReportMessage}
// 					reportDate = {this.props.reportDate}
// 					updateReport = {this.props.updateReport}
// 					Report = {this.props.Report}
// 				/>
// 				<div>
// 					<TopMessage Message={this.props.reportMessage}/>
// 				</div>
// 			</div>
//
// 		);
// 	}
// }

class EditHabits extends React.Component {
	addHabitListItem = () => {
		this.props.addHabitListItem(this.props.habitsList,"")
	};

	render() {
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
	}
}

class DayPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Message:  '',
      reportMessage: '',
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

	onChangeValue(event) {
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

  updateReportMessage =(value) => {
    this.setState({reportMessage:value});
  };

  render() {
    return (
      <div className="DayPlan">

        <div>
	        <Top Message={this.state.Message}/>
	      <div>

		      <div
			      className="btn-group btn-group-toggle" data-toggle="buttons"
			      style={{width:400 }} onClick={this.onChangeValue}>
			      <label className="btn btn-secondary"
			             style={{backgroundColor:this.props.saveButtonColor}}>
				      <input type="radio" name="options" id="execution"/> execution
			      </label>

			      <label className="btn btn-secondary"
			             style={{backgroundColor:this.props.settingButtonColor}}>
				      <input type="radio" name="options" id="configuration"/> configuration
			      </label    >
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

			      />
			      :
			      <EditHabits habitsList = {this.props.habitsList}
			                  delHabitListItem = {this.props.delHabitListItem}
			                  handleHabitListChange = {this.props.handleHabitListChange}
			                  addHabitListItem = {this.props.addHabitListItem}
			      />
		      }

		      <div className="btn-group"  style={{width:400}}>
			      <StatButton
				      Report = {this.props.Report}
				      updateMessage={this.updateMessage}
				      updateReportMessage={this.updateReportMessage}
			      />

			      <ExtendedStatButton
				      Report = {this.props.Report}
				      habitsList = {this.props.habitsList}
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
import React from "react";
import TopMessage from "../components/TopMessage";

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
		// this.props.updateMessage(this.state.name);
		TopMessage(this.state.name);
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

export default ExtendedStatButton;
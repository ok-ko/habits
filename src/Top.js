import React from "react";
import TopMessage from "./components/TopMessage";



class Top  extends React.Component{
	constructor(props) {
		super(props);
		// this.handleChange = this.handleChange.bind(this);
	}

	// handleChange(e) {
	// 	this.props.updateReportDate(e.target.value);
	// }

	render() {
		return(
			<div className="DayPlan">
				<div className="alert alert-dark" role="alert"  align="center" style={{width:400}}>
					Habit tracker
				</div>
				<TopMessage Message = {this.props.Message}/>
			</div>
		)
	}
}



export default Top;

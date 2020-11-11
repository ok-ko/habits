import React from "react";
import TopMessage from "../components/TopMessage";
import SaveButton from "./SaveButton";
import CheckHabit from "./CheckHabit";

class FillHabits extends React.Component {
	constructor(props) {
		super(props);
		this.handleDateChange = this.handleDateChange.bind(this);
	}

	handleDateChange(e) {
		this.props.handleDateChange(e.target.value);
	}
	render() {

		// 	const { activeMode, habitsList } = this.props;
		// 	const { handleDateChange } = this;

		const {habitsList} = this.props;
		// const {handleDateChange} = this;
		return(
			<div>
				<div className="input-group input-group-sm mb-3" style={{width:400}}>
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-sm">date</span>
					</div>
					<input type="date" className="form-control"
					       aria-label="Sizing example input"
					       aria-describedby="inputGroup-sizing-sm"
					       defaultValue={this.props.reportDate}
					       onChange={this.handleDateChange}
					/>
				</div>

				{habitsList.map((h, index) =>
					<CheckHabit
						title = {h.title}
						isDone = {false}
						id = {h.id}
						key={index}
						habit = {h}
						handleCheckboxChange = {this.props.handleCheckboxChange}
						updateReportValues = {this.props.updateReportValues}
						reportValues = {this.props.reportValues}
					/>
				)
				}
				<SaveButton
					reportValues = {this.props.reportValues}
					updateMessage={this.props.updateMessage}
					updateReportMessage={this.props.updateReportMessage}
					reportDate = {this.props.reportDate}
					updateReport = {this.props.updateReport}
					Report = {this.props.Report}
				/>
				<div>
					<TopMessage Message={this.props.reportMessage}/>
				</div>
			</div>

		);
	}
}

export default FillHabits;
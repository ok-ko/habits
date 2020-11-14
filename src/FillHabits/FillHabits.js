import React from "react";
import TopMessage from "../components/TopMessage";
import SaveButton from "./SaveButton";
import CheckHabit from "./CheckHabit";
import ReportDate from "./ReportDate";

class FillHabits extends React.Component {

	render() {

		// 	const { activeMode, habitsList } = this.props;
		// 	const { handleDateChange } = this;

		const {habitsList} = this.props;
		return(
			<div>

				<ReportDate
					reportDate ={this.props.reportDate}
					handleDateChange = {this.props.handleDateChange}
				/>

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
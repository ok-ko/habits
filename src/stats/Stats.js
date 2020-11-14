import React from "react";
import StatButton from "./StatButton";
import ExtendedStatButton from "./ExtendedStatButton";

class Stats extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			reportMessage: '',
		};
	}

	render() {
		return (
			<div className="btn-group" style={{ width: '100%' } }>
				<StatButton
					Report = {this.props.Report}
					updateMessage={this.props.updateMessage}
					updateReportMessage={this.props.updateReportMessage}
					resultShowChange ={this.props.resultShowChange}
					updateResult = {this.props.updateResult}

				/>

				<ExtendedStatButton
					Report = {this.props.Report}
					habitsList = {this.props.habitsList}
					updateMessage={this.updateMessage}
					updateReportMessage={this.updateReportMessage}
				/>
			</div>
		);
	}
}

export default Stats;
import React from "react";

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
			this.props.reportValues
		);

		let updateReportMessage =
			this.props.Report[this.props.Report.length-1].date
			+  ": " +
			this.props.Report[this.props.Report.length-1].reportValues.map(
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
				onClick= {() => this.handleClick()}
			>
				Save
			</button>
		);
	}
}

export default SaveButton;
import React from "react";

class ReportDate extends React.Component {

	handleDateChange = (e) => {
		this.props.handleDateChange(e.target.value);
	};

	render() {
		return (
			<div className="input-group input-group-sm mb-3">
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
		);
	}

}

export default ReportDate;
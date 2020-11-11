import React from "react";

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
			<div>
				{ this.props.updateReportValues(
					this.props.reportValues,
					this.props.habit,
					false)}

				<div className="input-group mb-3" style={{width:400}}>
					<div className="input-group-text">
						<input type="checkbox"
						       aria-label="Checkbox for following text input"
						       onChange={this.handleCheckboxChange}
						       defaultChecked={this.props.isDone}
						       id={this.props.id}
						/>
					</div>
					<input type="text"
					       className="form-control"
					       aria-label="Text input with checkbox"
					       value={this.props.title}
					       readOnly={true}

					/>

				</div>
			</div>
		)
	}
}
export default CheckHabit;
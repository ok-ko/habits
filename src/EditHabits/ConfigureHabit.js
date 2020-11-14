import React from "react";

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

export default ConfigureHabit;
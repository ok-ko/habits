import React from "react";
import ConfigureHabit from "./ConfigureHabit";

class EditHabits extends React.Component {
	addHabitListItem = () => {
		this.props.addHabitListItem(this.props.habitsList,"")
	};

	render() {
		return (
			<div >
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
					// style={{width:400}}
					onClick={this.addHabitListItem}
				>
					Add new habit
				</button>
			</div>
		)
	}
}

export default EditHabits;
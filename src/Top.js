import React from "react";




class Top  extends React.Component{

		render() {
			// const {Message} = props;
			const Message = this.props.Message;
		return(
			<div className="DayPlan">
				<div className="alert alert-dark" role="alert"  align="center">
					Habit tracker
				</div>

				{/*<TopMessage Message = {this.props.Message}/>*/}

				<div className="alert alert-light"
				     role="alert"
				     align="center">
					{Message}
				</div>

			</div>
		)
	}
}



export default Top;

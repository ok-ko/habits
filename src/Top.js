import React from "react";
import TopMessage from "./components/TopMessage";



class Top  extends React.Component{
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

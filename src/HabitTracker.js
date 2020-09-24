import React from "react";
import './App.css'
import DayPlan from "./DayPlan";

class HabitTracker extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {doneMessage : 'Звичка - з хебіттрекера'     };
    // }

    // updateData = (value) => {
    //     this.setState({ name: value });
    //     // console.log(this.name)
    // };
    render() {

        return (
            <div className="HabitTracker">
                <div>
                      {<DayPlan habits = {this.props.habits} />}
                </div>
            </div>
        );
    }

}

export default HabitTracker;
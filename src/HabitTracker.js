import React from "react";
// import DayHead from "./DayHead";
// import Buttons from "./Buttons";
import './App.css'
//
// function CheckHabit(props) {
//     return (
//         <div className="input-group mb-3" style={{width:400}}>
//             <div className="input-group-prepend">
//                 <div className="input-group-text">
//                     <input type="checkbox" aria-label="Checkbox for following text input" defaultChecked={props.isDone}  />
//                 </div>
//             </div>
//             <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.title}/>
//         </div>)
// }
//
// class DayPlan extends React.Component{
//     render() {
//         return (
//             <div className="DayPlan">
//                 <div>
//                     <DayHead doneMessage = {this.props.doneMessage}/>
//
//                     {this.props.habits.map((h, index) =>
//                         <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}
//
//                     <Buttons />
//                 </div>
//             </div>
//         );
//     }
// }

class HabitTracker extends React.component{
    render() {
        // <div>
            <DayPlan doneMessage = {this.props.doneMessage} habits = {this.props.habits}/>
        // </div>
        
    }

}

// export default DayPlan;
export default HabitTracker;
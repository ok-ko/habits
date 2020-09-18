import React from "react";
import DayHead from "./DayHead";
import Buttons from "./Buttons";
import './App.css'

function CheckHabit(props) {
    return (
    <div className="input-group mb-3" style={{width:400}}>
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input" defaultChecked={props.isDone}  />
            </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.title}/>
    </div>)
}



// function DayPlan(props) {
//     const {habits} = props;
//     const {doneMessage} = props;
//
//         return (
//             <div className="DayPlan">
//             <div>
//                 <DayHead doneMessage = {doneMessage}/>
//
//                 {habits.map((h, index) =>
//                         <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}
//
//                 <Buttons />
//             </div>
//         </div>)
// }

class DayPlan extends React.Component{
    constructor(props) {
        super(props);
    }
    // const {habits} = props;
    // const {doneMessage} = props;
    // habits = this.props;
    // doneMessage = this.doneMessage;

    render() {

        return (
            <div className="DayPlan">
                <div>
                    <DayHead doneMessage = {this.props.doneMessage}/>

                    {this.props.habits.map((h, index) =>
                        <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}

                    <Buttons />
                </div>
            </div>
        );
    }

}
// function DayPlan(props) {
//     const {habits} = props;
//     const {doneMessage} = props;
//
//     return (
//         <div className="DayPlan">
//             <div>
//                 <DayHead doneMessage = {doneMessage}/>
//
//                 {habits.map((h, index) =>
//                     <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}
//
//                 <Buttons />
//             </div>
//         </div>)
// }

export default DayPlan;
import React from "react";
import DayHead from "./DayHead";
import Buttons from "./Buttons";
import './App.css'
import DayAlert from "./DayAlert";

// function CheckHabit(props) {
//     return (
//     <div className="input-group mb-3" style={{width:400}}>
//         <div className="input-group-prepend">
//             <div className="input-group-text">
//                 <input type="checkbox" aria-label="Checkbox for following text input" defaultChecked={props.isDone}  />
//             </div>
//         </div>
//         <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.title}/>
//     </div>)
// }



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

// class DayPlan extends React.Component{
//     constructor(props) {
//         super(props);
//         // this.state = {Report {date:}}
//
//         };
//
//     // const {habits} = props;
//     // const {doneMessage} = props;
//     // habits = this.props;
//     // doneMessage = this.doneMessage;
//
//     render() {
//
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
//
// }
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

class DayHead  extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {reportDate : this.now};
        // console.log(this.state);
    }


// function DayHead(props) {

    // const {doneMessage} = props;

    // nowDate() {
    //     let curDate = new Date();
    //     let year = curDate.getFullYear();
    //     let month = String(curDate.getMonth()+1).padStart(2, '0');
    //     let day = String(curDate.getDate()).padStart(2,'0');
    //     this.setState(state => ({
    //     (year+'-'+month+'-'+day)
    //     }))
    // }
    now() {
        let curDate = new Date();
        let year = curDate.getFullYear();
        let month = String(curDate.getMonth()+1).padStart(2, '0');
        let day = String(curDate.getDate()).padStart(2,'0');
        // return year+'-'+month+'-'+day

        return year+'-'+month+'-'+day
    }


    // return ((year+'-'+month+'-'+day),
    //         console.log((year+'-'+month+'-'+day)))


    // let now = new Date(),
    // year = now.getFullYear(),
    // month = String(now.getMonth()+1).padStart(2, '0'),
    // day = String(now.getDate()).padStart(2,'0');
    // now = year+'-'+month+'-'+day;
    //
    // now = {
    //     curDate = new Date();
    //     year = curDate.getFullYear();
    //     month = String(curDate.getMonth()+1).padStart(2, '0');
    //     day = String(curDate.getDate()).padStart(2,'0')
    //     return (year+'-'+month+'-'+day)
    // };
    //
    //   now = new Date();


    // now = year+'-'+month+'-'+day;

    // let doneMessage = `"Звичка - друга натура"`;

    handleChange(e) {
        this.setState({reportDate:e.target.value})
    }

    render() {
        return(
            console.log(this.now()),

                <div className="DayPlan">
                    <div className="alert alert-dark" role="alert"  align="center" style={{width:400}}>
                        Трекер корисних звичок
                    </div>

                    <div className="input-group input-group-sm mb-3" style={{width:400}}> </div>

                    <div className="input-group input-group-sm mb-3" style={{width:400}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">сьогодні</span>
                        </div>
                        <input type="date" className="form-control"
                               aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-sm"
                               defaultValue={this.now()}
                            // onChange={this.handleChange}
                            // value ={'2020-09-18'}
                            //this.state.reportDate
                        />
                    </div>

                    <DayAlert doneMessage = {this.props.doneMessage}/>
                </div>
        )
    }





}

class DayPlan extends React.Component{
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

export default DayPlan;
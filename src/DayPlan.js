import React from "react";
import './App.css'

const Habits = [
    {title: 'Study English', isDone: true},
    {title: 'Study React', isDone: false},
    {title: 'Drink water', isDone: false},
    {title: 'No smoking', isDone: false},
    {title: 'Smile', isDone: true}
];


let now = new Date(),
    year = now.getFullYear(),
    month = String(now.getMonth()+1).padStart(2, '0'),
    day = String(now.getDate()).padStart(2,'0');
now = year+'-'+month+'-'+day;

let doneMessage = `"Звичка - друга натура"`;


function DayHead() {
    return(
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
                       value={now}
                       // disabled={true}
                />
            </div>
            <div className="alert alert-light" role="alert" align="center" style={{width:400}} >
                {doneMessage}
            </div>
        </div>
    )

}

function CheckHabit(props) {
    return (
    <div className="input-group mb-3" style={{width:400}}>
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input" checked={props.isDone} />
            </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.title}/>
    </div>)
}


function Buttons() {
    return (
        <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
            <button type="button" className="btn btn-secondary" onClick={() => alert('збережено')}>Зберегти день</button>
            <button type="button" className="btn btn-secondary">Статистика</button>
            <button type="button" className="btn btn-secondary">Налаштування</button>
        </div>
    )
}

class DayPlan extends React.Component{
    render() {
        return (<div className="DayPlan">
            <div>
                <DayHead/>

                {Habits.map((h, index) =>
                        <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}

                <Buttons/>
            </div>


        </div>)
    }
}

export default DayPlan;
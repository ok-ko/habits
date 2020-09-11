import React from "react";
import './App.css'

const Habits = [
    {title: 'Study English', isDone: true},
    {title: 'Study React', isDone: false},
    {title: 'Drink water', isDone: false},
    {title: 'No smoking', isDone: false}
];


var now = new Date().toLocaleDateString();

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
                />
            </div>
            <div className="alert alert-light" role="alert" align="center" style={{width:400}}>
                "Звичка - друга натура"
            </div>
        </div>
    )

}

function CheckHabit(props) {
    return (
    <div className="input-group mb-3" style={{width:400}}>
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input" value="true"/>
            </div>
        </div>
        <input type="text" className="form-control" aria-label="Text input with checkbox" value={props.title}/>
    </div>)
}

function habitsList() {
    for (let i = 0; i <= Habits.length; i++) {
        alert(Habits[i].title);
    }
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
    constructor(props) {
        super(props);
        this.state = Habits;

    }

    componentDidMount() {
        for (let i=1; i<this.state.length; i++) {

            alert(Habits[i].title);

            {/*
             ------- чому ні? --------
             CheckHabit (Habits[i].title);
             */}

        }

    }



    render() {
        return (<div className="DayPlan">
            <div>
                <DayHead/>

                <CheckHabit title = {this.state[0].title}/>

                <CheckHabit title = {Habits[1].title}/>
                <CheckHabit title = {Habits[2].title}/>
                <CheckHabit title = {Habits[3].title}/>

                <Buttons/>
            </div>
        </div>)
    }


}

export default DayPlan;
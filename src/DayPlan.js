import React from "react";
import './App.css'

function DayPlan() {

    let curDate = new Date();
    let dd = String(curDate.getDate()).padStart(2, '0');
    let mm = String(curDate.getMonth() + 1).padStart(2, '0');
    let yyyy = curDate.getFullYear();
    curDate = mm + '/' + dd + '/' + yyyy;

    const Habits = [
        {title: 'Study English', isDone: true},
        {title: 'Study React', isDone: false},
        {title: 'Drink water', isDone: false},
        {title: 'No smoking', isDone: false}
    ];



    return (
        <div className="DayPlan">

            <div className="alert alert-dark" role="alert"  align="center" style={{width:400}}>
                Трекер корисних звичок
            </div>

            <div className="input-group input-group-sm mb-3" style={{width:400}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">сьогодні</span>
                </div>

                <input type="date" className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"
                />
            </div>


            <div className="alert alert-light" role="alert" align="center" style={{width:400}}>
                "Звичка - друга натура"
            </div>




            <div className="input-group mb-3" style={{width:400}}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" value="true"/>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={Habits[0].title}/>
            </div>

            <div className="input-group mb-3" style={{width:400}}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={Habits[1].title}/>
            </div>


            <div className="input-group mb-3" style={{width:400}}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={Habits[2].title}/>
            </div>

            <div className="input-group mb-3" style={{width:400}}>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox" value={Habits[3].title}/>
            </div>

            <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
                <button type="button" className="btn btn-secondary">Зберегти день</button>
                <button type="button" className="btn btn-secondary">Статистика</button>
                <button type="button" className="btn btn-secondary">Налаштування</button>
            </div>


        </div>
    );
}

export default DayPlan;
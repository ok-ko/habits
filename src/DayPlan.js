import React from "react";
import './App.css'


class StatButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: 'все що потрібно знати про свої звички'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.updateData(this.state.name);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary"
                onClick= {() => this.handleClick()}
            >
                Stat
            </button>
        );
    }
}


class SettingsButton extends React.Component {
    state = {
        name: 'налаштування звичок'
    };

    handleClick() {
        this.props.updateData(this.state.name);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary"
                onClick= {() => this.handleClick()}
            >
                Settings
            </button>
        );
    }
}


class SaveButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: 'Звичка - з сейвбаттона'}
    }

    handleClick() {
        this.props.updateData(this.state.name);
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-secondary"
                onClick= {() => this.handleClick()}
            >
                Save the day
            </button>
        );
    }
}


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


function DayAlert(props) {
    const {doneMessageState} = props;
    return (
        <div className="alert alert-light" role="alert" align="center" style={{width:400}} >
            {doneMessageState}
        </div>
    )
}

class DayHead  extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onDateChange(e.target.value);
    }

    render() {
        const reportDate = this.props.reportDate;
        console.log(reportDate);
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
                               defaultValue={reportDate}
                               // defaultValue={this.now()}

                               onChange={this.handleChange}
                               value ={reportDate}
                        />
                    </div>
                    <DayAlert doneMessageState = {this.props.doneMessageState}/>
                </div>
        )
    }
}

class DayPlan extends React.Component{
    constructor(props) {
        super(props);
        this.now = this.now.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            doneMessageState:  'Звичка - початкове повідомлення пр звичку',
            reportDate: this.now(),
        }
    }

    now() {
        let curDate = new Date();
        let year = curDate.getFullYear();
        let month = String(curDate.getMonth()+1).padStart(2, '0');
        let day = String(curDate.getDate()).padStart(2,'0');
        return year+'-'+month+'-'+day
    }

    handleDateChange(reportDate) {
        this.setState({reportDate})
    }

    updateData = (value) => {
        this.setState({ doneMessageState: value });
    };

    render() {
        const reportDate = this.state.reportDate;
        return (
            <div className="DayPlan">
                <div>
                    <DayHead
                        doneMessageState = {this.state.doneMessageState}
                        onDateChange = {this.handleDateChange}
                        reportDate = {reportDate}
                    />

                    {this.props.habits.map((h, index) =>
                        <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}

                    <div>
                        <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
                            <SaveButton updateData={this.updateData} />
                            <StatButton updateData={this.updateData} />
                            <SettingsButton updateData={this.updateData} />
                        </div>

                        <div>
                            <DayAlert doneMessageState={this.state.doneMessageState}/>
                        </div>

                        <div>
                            {reportDate}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DayPlan;
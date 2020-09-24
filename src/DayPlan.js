import React from "react";
import './App.css'


class StatButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: 'все що потрібно знати про свої звички'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // console.log(this.props);
        // console.log(this.state.name);
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
        // this.handleClick = this.handleClick.bind(this);
        // this.state.Report = {repDate: 'date'
        // };
        // console.log(this.state.Report)
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

// class Buttons extends React.Component {
    // state = {
    //     name: ''
    // };
    //
    // updateData = (value) => {
    //     this.setState({ name: value });
    // };

//     render() {
//         return (
//             <div>
//                 <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
//                     <SaveButton updateData={this.updateData} />
//                     <StatButton updateData={this.updateData} />
//                     <SettingsButton updateData={this.updateData} />
//
//                     {/*<button type="button" className="btn btn-secondary" onClick={() => handleClickStat()}>Статистика</button>*/}
//                     {/*<button type="button" className="btn btn-secondary">Налаштування</button>*/}
//                 </div>
//
//                 <div className="alert alert-light" role="alert" align="center" style={{width:400}} >
//                     {this.state.name}
//                 </div>
//                 <div>
//                     <DayAlert doneMessage={this.state.name}/>
//                 </div>
//             </div>
//         );
//     }
// }

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
        this.state = {reportDate : this.now()};
        this.now = this.now.bind(this);


    }

    now() {
        let curDate = new Date();
        let year = curDate.getFullYear();
        let month = String(curDate.getMonth()+1).padStart(2, '0');
        let day = String(curDate.getDate()).padStart(2,'0');
        return year+'-'+month+'-'+day
    }

    handleChange(e) {
        // this.setState({reportDate:e.target.value})
        this.props.onDateChange(e.target.value);

    }

    render() {
        const reportDate = this.props.reportDate;
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
                               defaultValue={this.now()}
                               // onClick= {() => this.handleClick()}
                               onChange={this.handleChange}
                               value ={reportDate}
                            //this.state.reportDate
                        />
                    </div>
                   {console.log(reportDate)}
                    <DayAlert doneMessageState = {this.props.doneMessageState}/>
                </div>
        )
    }
}

class DayPlan extends React.Component{
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            doneMessageState:  'Звичка - з хебіттрекера неправильна',
            reportDate: 'tadadam',
        }

        // this.handleReportDate = this.handleReportDate.bind(this);

        // this.handleChange = this.handleChange.bind(this);
    }

    handleDateChange(reportDate) {
        this.setState({reportDate})
    }
    const 
    // state = {
    //     doneMessageState:  'Звичка - з хебіттрекера неправильна',
    //     reportDate: '',
    // };


    // handleChange(reportDate) {
    //     this.setState({
    //         reportDate: reportDate
    //    });

    // }

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
                    />


                    {this.props.habits.map((h, index) =>
                        <CheckHabit title = {h.title} isDone = {h.isDone} key={index}/>)}
                    {/*<Buttons />*/}

                    <div>
                        <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
                            <SaveButton updateData={this.updateData} />
                            <StatButton updateData={this.updateData} />
                            <SettingsButton updateData={this.updateData} />

                            {/*<button type="button" className="btn btn-secondary" onClick={() => handleClickStat()}>Статистика</button>*/}
                            {/*<button type="button" className="btn btn-secondary">Налаштування</button>*/}
                        </div>

                        {/*<div className="alert alert-light" role="alert" align="center" style={{width:400}} >*/}
                        {/*    {this.state.name}*/}
                        {/*</div>*/}

                        <div>
                            {/*<DayAlert doneMessageState={this.state.doneMessageState}/>*/}
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
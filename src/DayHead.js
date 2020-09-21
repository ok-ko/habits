import React from "react";
import DayAlert from "./DayAlert";

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

export default DayHead;
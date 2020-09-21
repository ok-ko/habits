import React from "react";



// тут я маю вивести весь об'єкт(чи масив?????) Report





// class StatButton extends React.Component {
//     state = {
//         name: 'твої звички'
//     };
//
//     handleClick() {
//         console.log(this.props.updateData);
//         console.log(this.state.name);
//         this.props.updateData(this.state.name);
//         console.log(this.props.updateData);
//     }
//
//     render() {
//         return (
//             <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick= {() => this.handleClick()}
//             >
//                 Statistics
//             </button>
//         );
//     }
// }

class StatButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: 'your useful habits'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props);
        console.log(this.state.name);
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

// class SaveButton extends React.Component {
//     state = {
//         name: 'Вітаю! Ти на один крок ближче до мети'
//     };
//
//     handleClick() {
//         console.log(this.props.updateData);
//         console.log(this.state.name);
//         this.props.updateData(this.state.name);
//         console.log(this.props.updateData);
//     }
//
//     render() {
//         return (
//             <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick= {() => this.handleClick()}
//             >
//                 Save the day
//             </button>
//         );
//     }
// }

class SaveButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: 'Вітаю! Ти на один крок ближче до мети'};
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
                Save the day
            </button>
        );
    }
}

class Buttons extends React.Component {
    state = {
        name: ''
    };

    updateData = (value) => {
        this.setState({ name: value });
    }

    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="Basic example" style={{width:400}}>
                    <SaveButton updateData={this.updateData} />
                    <StatButton updateData={this.updateData} />
                    <SettingsButton updateData={this.updateData} />

                    {/*<button type="button" className="btn btn-secondary" onClick={() => handleClickStat()}>Статистика</button>*/}
                    {/*<button type="button" className="btn btn-secondary">Налаштування</button>*/}
                </div>

                <div className="alert alert-light" role="alert" align="center" style={{width:400}} >
                    {this.state.name}
                </div>
            </div>
        );
    }
}

 export default Buttons;


import React from "react";
import ResultMessage from "../components/ResultMessage";

class StatButton extends React.Component {

	constructor(props){
		super(props);
		this.state = {name: 'all you need to know about your habits'};
		// this.handleClick = this.handleClick.bind(this);
	}


	handleClick = () => {
		const { Report, updateMessage, updateReportMessage, resultShowChange, updateResult } = this.props;

		updateMessage(this.state.name);
		resultShowChange();

		let updateStatMessage =``;
		for (let i=0; i< Report.length;i++) {
			updateStatMessage += ` ${Report[i].date}:${Report[i].reportValues.map((h) => h.title + (h.isDone?' +':' -'))}
		  `;
		}



		 let statResult = `date`;
		// for (let i=1; i<Report.length;i++) {
		// 	// statResult +=
		// 		<h4>{Report[i].date}</h4>
		// 		<h6>Report[i].reportValues.map((h) => h.title + (h.isDone ? ' +' : ' -'))}</h6>;
		// }

		updateReportMessage(updateStatMessage);
		// updateResult(statResult);

		// let someValue = (Report.map((h) => Report[h].date));
		
		// ResultMessage(someValue);



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

export default StatButton;
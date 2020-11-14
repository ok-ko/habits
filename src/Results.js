import React from "react";
import StatButton from "./stats/StatButton";
import TopMessage from "./components/TopMessage";
import ResultMessage from "./components/ResultMessage";

class Results extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	updateStatMessage:`stat`;
	// }

	outputStatResults (Report)  {
		let updateStatMessage =``;
		for (let i=0; i< this.props.Report.length;i++) {
			updateStatMessage += ` ${this.props.Report[i].date}:${this.props.Report[i].reportValues.map((h) => h.title + (h.isDone?' +':' -'))}
		  `;
		}
		this.props.updateResult(updateStatMessage);
		console.log(updateStatMessage);
		return ("ok")


	}




	render() {

		return (
			<div>
				<div className="alert alert-dark" role="alert"  align="center">
					Results
				</div>

				{/* я хочу вивести тут Report як в ReportMessage*/}

				{/*<ResultMessage/>*/}

				<TopMessage Message={this.props.result}/>

				 	<h4>date</h4>
					<h6>habit1 -</h6>
				 <h6>habit2 + </h6>
			</div>









		// 	<StatButton
		// Report = {this.props.Report}
		// updateMessage={this.props.updateMessage}
		// updateReportMessage={this.props.updateReportMessage}
		// />
		//








		);
	}
}

export default Results;
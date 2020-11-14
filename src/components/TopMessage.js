import React from "react";

function TopMessage(props) {
	const {Message} = props;
	return (
		<div className="alert alert-light"
		     role="alert"
		     align="center"
		     >
			{Message}
		</div>
	)
}

export default TopMessage;


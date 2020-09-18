import React from "react";

function DayAlert(props) {
    const {doneMessage} = props;
    return (
        <div className="alert alert-light" role="alert" align="center" style={{width:400}} >
            {doneMessage}
        </div>
    )

}


export default DayAlert;
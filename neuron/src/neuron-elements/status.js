import React from "react";
import statusOnline from "./assets/online.svg"
import statusOffline from "./assets/offline.svg"

let status;

if (navigator.onLine) status = statusOnline;
else if (!navigator.onLine) status = statusOffline;

class NeuronStatus extends React.Component {    
    constructor(props) {
        super(props);
        this.title = {value: this.props.title};
    }

    render() {
        return (
        <img id="status" width="22px" height="22px" src={status} />
        );
    }
}

export default NeuronStatus;
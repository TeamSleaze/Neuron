import React from "react";

class NeuronAssignee extends React.Component {    
    constructor(props) {
        super(props);
        this.avatar = {value: this.props.avatar};
    }

    render() {
        return (
        <a href="" className="assignee">
            <img src={this.props.avatar}/>
        </a>
        );
    }
}

export default NeuronAssignee;
import React from "react";
import NeuronCardTag from "./card-tag";

class NeuronCard extends React.Component {    
    constructor(props) {
        super(props);
        this.title = {value: this.props.title};
    }

    render() {
        return (
        <div className="neuron-card">
            <div className="card-tag-link">
                {this.props.children}
            </div>
            
            <span className="title">{this.props.title}</span>
            
            <span className="assignees" dir="rtl">
                
            </span>

            <a className="open-modal" className="card-link"></a>
        </div>
        );
    }
}

export default NeuronCard;
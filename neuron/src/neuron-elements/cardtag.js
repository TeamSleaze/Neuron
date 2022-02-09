import React from "react";

class NeuronCardTag extends React.Component {    
    constructor(props) {
        super(props);
        this.tag = {value: this.props.tag};
    }

    render() {
        return (
        <a href="#tag-02" className="card-tag" text="Tag" color="#c792ea">
            {this.props.tag}
        </a>
        );
    }
}

export default NeuronCardTag;
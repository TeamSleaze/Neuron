import React from "react";

class NeuronCardTag extends React.Component {    
    constructor(props) {
        super(props);
        this.tag = {value: this.props.tag};
    }

    render() {
        const style = {
            // Take associatedTag and get color from database / local storage
            background: '#03ce7b',
            color: '#000000'
        };

        return (
        <a href="#tag-02" className="card-tag" style={style}>
            {this.props.tag}
        </a>
        );
    }
}

export default NeuronCardTag;
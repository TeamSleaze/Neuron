import React from "react";

class NeuronTitleCard extends React.Component {    
    constructor(props) {
        super(props);
        this.title = {value: this.props.title};
        this.associatedTag = {value: this.props.associatedTag}
    }

    render() {
        const style = {
            // Take associatedTag and get color from database / local storage
            background: '#03ce7b',
            color: '#000000'
        };

        return (
        <div className="neuron-card neuron-title-card" style={style}>
            <span className="title">{this.props.title}</span>
            <a className="open-modal" className="card-link"></a>
        </div>
        );
    }
}

export default NeuronTitleCard;
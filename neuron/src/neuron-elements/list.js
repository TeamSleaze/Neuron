import React from "react";

class NeuronList extends React.Component {    
    constructor(props) {
        super(props);
        this.title = {value: this.props.title};
    }

    render() {
        return (
        <div className="list">
            <div className="list-navigation">
                <p className="list-title" id="title-editable" maxLength="512" 
                contentEditable="true" spellCheck="false">
                    {this.props.title}
                </p>
                
                <span className="list-options">
                    <a href="#list-options">
                        <i className="fas fa-ellipsis-v"></i>
                    </a>
                </span>
            </div>

            {this.props.children}
        </div>
        );
    }
}

export default NeuronList;
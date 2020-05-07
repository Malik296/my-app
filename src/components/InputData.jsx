import React, { Component } from 'react';

class InputData extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="flip-card">
                    <FrontSide {...other} />
                    <BackSide pin={pin} cvv={cvv} />
                </div>
            </div>
        );
    }
}

export default InputData;
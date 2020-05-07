import React, { Component } from 'react';

class BackSide extends Component {
    static defaultProps = {
        pin: '1234',
        cvv: '000'
    }

    render() {
        const cvvFocus = this.props.cvvFocuse;
        return (
            <div className="flip-card-back">
                <div className="section-black"></div>
                <div className="section-white">
                    <h4 className={cvvFocus ? "onfocus-class" : ''}><span>CVV:</span> {this.props.cvv}</h4>
                    <span>{this.props.pin}</span>
                </div>
            </div>
        );
    }
}

export default BackSide;
import React, { Component } from 'react';

import FrontSide from './FrontSide';
import BackSide from './BackSide';

class MyBankCard extends Component {
    render() {
        const { pin, cvv, ...other } = this.props.obj;
        // console.log(this.props.numFocuse);
        return (
            <div className="card-container">
                <div className={"flip-card " + (this.props.flipCard ? 'back-side' : null)}>
                    <FrontSide {...other}
                        nameFocuse={this.props.nameFocuse}
                        numFocuse={this.props.numFocuse}
                        dateFocuse={this.props.dateFocuse}
                        typeFocuse={this.props.typeFocuse}
                        bankFocuse={this.props.bankFocuse}
                    />
                    <BackSide pin={pin} cvv={cvv}
                        cvvFocuse={this.props.cvvFocuse}
                    />
                </div>
            </div>
        );
    }
}

export default MyBankCard;
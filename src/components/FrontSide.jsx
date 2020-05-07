import React, { Component } from "react";

class FrontSide extends Component {
    static defaultProps = {
        name: "XXXXX XXXXXXXXX",
        number: "0000 0000 0000 0000",
        expireDate: "01/21",
        bankName: "https://www.pashabank.ge/m/i/downloads/logo-en-horizontal.png",
        type: "DEBIT"
    };

    render() {
        const { name, number, expireDate, bankName, cardType, type, nameFocuse, numFocuse, dateFocuse, typeFocuse, bankFocuse } = this.props;

        return (
            <div className="flip-card-front">
                <div className="sections banc-logo">
                    <img className={"logo " + (bankFocuse ? "onfocus-class" : '')} src={bankName} alt="" />
                </div>
                <div className="sections chip-div">
                    <img
                        className="chip"
                        src="https://img.icons8.com/plasticine/2x/sim-card-chip.png"
                        alt="chip"
                    />
                </div>
                <div className="sections num">
                    <h1 className={numFocuse ? "onfocus-class" : ""}>{number !== '' ? number : '0000 0000 0000 0000'}</h1>
                </div>
                <div className="sections bottom">
                    <div className="name-div-min-height">
                        <h5><span className={nameFocuse ? "onfocus-class" : ""}>{name !== '' ? name : 'XXXXX XXXXXXXXXXX'}</span></h5>
                    </div>
                    <div className="cart-type">
                        <div className="left-bottom">
                            <span className="valid">Valid thru:</span> <br />
                            <span className={"data" + (dateFocuse ? " onfocus-class" : "")}>{expireDate}</span>
                        </div>
                        <span className="valid">{type}</span>
                        <img className={typeFocuse ? " onfocus-class" : ""}
                            src={cardType === 'visa' ? "https://www.pikpng.com/pngl/b/81-810129_visa-la-perle-visa-card-logo-white-clipart.png" : 
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"}
                            alt="Visa or Master"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontSide;

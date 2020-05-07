import React, { Component } from 'react';
import Style from './steps.module.scss';

class FinalStep extends Component {
    render() {

        const { name, number, expireDate, bank, cardType, cvv } = this.props.obj;

        let bool = false;

        if (this.props.currentStep === 2) {
            bool = true;
        }

        const classNames = "finalStep-container" + (bool ? ' step-visible' : '')
        return (
            <div className={classNames}>
                <h2>Подтвердить</h2>
                <table className={Style.infoTable}>
                    <tbody>
                    <tr><td>Имя</td><td>{name}</td></tr>
                    <tr><td>Номер</td><td>{number}</td></tr>
                    <tr><td>Дата окончания</td><td>{expireDate}</td></tr>
                    <tr><td>Банк</td><td>{bank}</td></tr>
                    <tr><td>Тип Карты</td><td>{cardType}</td></tr>
                    <tr><td>CVV</td><td>{cvv}</td></tr>
                    </tbody>
                </table>
                <div className={Style.buttonsDiv}>
                    <button type="primary" onClick={() => this.props.nextStep(1)} className={Style.prevButton}>Back</button>
                    <button type="primary" onClick={() => this.props.chanceLeftContVisib()} className={Style.nextButton}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default FinalStep;
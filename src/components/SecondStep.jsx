import React, { Component } from 'react';
import Style from './steps.module.scss';
import styled from 'styled-components'
import { Input } from 'antd'

const PositionRelativeDiv = styled.div`
    position: relative;
`;

class SecondStep extends Component {
    state = {
        btnCheck: false
    }

    onChanceCvv = (value) => {
        let val = value.target.value;
        if (!isNaN(val) && val.length < 4) {
            this.props.setCvv(value.target.value);
            if (val.length === 3) {
                this.setState({ btnCheck: true });
            } else {
                this.setState({ btnCheck: false });
            }
        } else if(val.length > 4){
            this.setState({ btnCheck: false });
        }
    }

    onFocusCvvHandler = (bool) => {
        this.props.focuseCvv(bool);
    }
    render() {
        let btnCheck = false;
        if (this.state.btnCheck) {
            btnCheck = true;
        }

        let bool = false;
        if (this.props.currentStep === 1) {
            bool = true;
        }

        // const classNames = "second-step-container" + (bool ? ' step-visible' : '')
        const classNames = "second-step-container step-visible";

        let btnActive = false;
        if (this.state.btnCheck) {
            btnActive = true;
        }
        return (
            <div className={classNames}>
                <h2>Шаг 2</h2>
                <div>
                    <label htmlFor='inpCVV'><span>CVV</span></label>
                    <PositionRelativeDiv>
                        <Input type="text" id='inpCVV' placeholder="Введите CVV"
                            onFocus={() => this.onFocusCvvHandler(true)}
                            onBlur={() => this.onFocusCvvHandler(false)}
                            onChange={this.onChanceCvv}
                            value={this.props.cvv}
                        />
                        {(this.state.nameCheck || !this.state.tltypeName) ? null : (<span className="tooltiptext">"Минимум 3 символа"</span>)}
                    </PositionRelativeDiv>
                </div>

                <div className={Style.buttonsDiv}>
                    <button type="primary" onClick={() => this.props.nextStep(0)} className={Style.prevButton}>Back</button>
                    <button disabled={!btnCheck} type="primary" onClick={() => this.props.nextStep(2)} className={Style.nextButton + ' ' + (!btnCheck ? Style.disable : null)}>Next Step</button>
                </div>
            </div>
        );
    }
}

export default SecondStep;
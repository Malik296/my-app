import React, { Component } from 'react';
import moment from "moment";
import styled from 'styled-components'
import DatePicker from 'antd/es/date-picker';
import { Input, Select, Steps } from 'antd'
import Style from './steps.module.scss';

const { Option } = Select;
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const PositionRelativeDiv = styled.div`
    position: relative;
`;


class FirstStep extends Component {
    state = {
        nameCheck: false,
        numberCheck: false,
        dataCheck: false,

        tltypeName: false,
        tltypeNum: false,

        links: [
            "https://www.pashabank.ge/m/i/downloads/logo-en-horizontal.png",
            "https://kapitalbank.az/uploads/news/385/kapital_bank_logo_1491802443.png",
            "https://ra22vek.ru/wp-content/uploads/2019/01/6.png",
            "https://instructorpro.ru/wp-content/uploads/2019/07/Sberbank-InstructorPRO.png"
        ]
    }

    disabledDate = (current) => {
        return current && current < moment().endOf("day");
    }

    onFocusNameHandler = () => {
        this.setState({ tltypeName: true })
        this.props.focuseName();
    }

    onFocusNumHandler = () => {
        this.setState({ tltypeNum: true })
        this.props.focuseNum();
    }

    onFocusDateHandler = (boll) => {
        this.props.focuseDate(boll);
    }


    onFocusTypeCard = (boll) => {
        this.props.focuseType(boll);
    }

    onFocusBank = (boll) => {
        this.props.focuseBank(boll);
    }

    onChanceName = (event) => {
        let val = event.target.value.toUpperCase();

        let letters = /^[A-Za-z ]+$/;
        if (val.length < 30 && (val.match(letters) || val === '')) {
            this.props.setName(val);
            if (val.length >= 3) {
                this.setState({
                    nameCheck: true
                })
            } else {
                this.setState({
                    nameCheck: false
                })
            }
        }
    }

    onChanceNumber = (event) => {
        let val = event.target.value.split(' ').join('');
        if ((val.length <= 16) && !isNaN(val)) {
            let newNumber = '';
            for (let i = 0; i < val.length; i++) {
                if (i % 4 === 0 && i !== 0) {
                    newNumber += ' ';
                    newNumber += val[i];
                } else {
                    newNumber += val[i];
                }
            }
            if (val.length === 16) {
                this.setState({
                    numberCheck: true
                })
            } else {
                this.setState({
                    numberCheck: false
                })
            }
            this.props.setNumber(newNumber);
        }
    }

    onChanceExpireDate = (event) => {
        this.setState({ dataCheck: true });
        this.props.setExpireDate(event.format('MM/YY'));
        this.onFocusDateHandler(false);
    }


    selectTypeHandleChange = (event) => {
        this.onFocusTypeCard(false)
        this.props.setCardType(event);
    }

    selectBankHandleChange = (event) => {
        this.onFocusBank(false);

        let bankLink = this.state.links[event];
        let bank = 'Pasha Bank';
        if (event === '0') {
            bank = 'Pasha Bank';
        } else if (event === '1') {
            bank = 'Kapital Bank'
        } else if (event === '2') {
            bank = 'Tinkoff Bank'
        } else if (event === '3') {
            bank = 'Sber Bank'
        }

        this.props.setBankName(bank, bankLink);
    }

    render() {
        let bool = false;

        if (this.props.currentStep === 0) {
            bool = true;
        }

        let btnCheck = false;
        if (this.state.nameCheck && this.state.numberCheck) {
            btnCheck = true;
        }
        return (
            // <div className={"first-step-container" + (bool ? ' step-visible' : '')}>
            <div className="first-step-container step-visible">
                <h2>Шаг 1</h2>
                <div>
                    <label htmlFor='inpName'><span>Имя</span></label>
                    <PositionRelativeDiv>
                        <Input type="text" id='inpName' placeholder="Введите имя"
                            onFocus={this.onFocusNameHandler}
                            onBlur={this.onFocusNameHandler}
                            onChange={this.onChanceName}
                            value={this.props.name}
                        />
                        {(this.state.nameCheck || !this.state.tltypeName) ? null : (<span className="tooltiptext">"Минимум 3 символа"</span>)}
                    </PositionRelativeDiv>
                </div>
                <hr />
                <div>

                    <label htmlFor='inpNum'><span>Номер</span> </label>
                    <PositionRelativeDiv>
                        <Input type="text" id='inpNum' placeholder="Введите номер"
                            onFocus={this.onFocusNumHandler}
                            onBlur={this.onFocusNumHandler}
                            onChange={this.onChanceNumber}
                            value={this.props.number} />
                        {(this.state.numberCheck || !this.state.tltypeNum) ? null : (<span className="tooltiptext">"Введите 16 цифр"</span>)}
                    </PositionRelativeDiv>
                </div>
                <hr />

                <FlexDiv>
                    <label htmlFor='slBank'>Выберите банк </label>
                    <Select defaultValue="Pasha Bank" style={{ width: '60%' }} id='slBank'
                        onChange={this.selectBankHandleChange}
                        onFocus={() => this.onFocusBank(true)}
                        onBlur={() => this.onFocusBank(false)}
                    >
                        <Option value="0">Pasha Bank</Option>
                        <Option value="1">Kapital Bank</Option>
                        <Option value="2">Tinkoff Bank</Option>
                        <Option value="3">Sber Bank</Option>
                    </Select>

                </FlexDiv>
                <hr />
                <FlexDiv>
                    <div>
                        <label htmlFor='selData'><span>Срок карты</span>
                        </label>
                        <DatePicker picker="month" style={{ width: 150 }} id='selData'
                            disabledDate={this.disabledDate}
                            onChange={this.onChanceExpireDate}
                            onFocus={() => this.onFocusDateHandler(true)}
                            onBlur={() => this.onFocusDateHandler(false)}
                        />

                    </div>
                    <div>
                        <label><span>Тип карты</span>
                            <Select defaultValue="VISA" style={{ width: 110 }}
                                onFocus={() => this.onFocusTypeCard(true)}
                                onBlur={() => this.onFocusTypeCard(false)}
                                onChange={this.selectTypeHandleChange}>
                                <Option value="visa">VISA</Option>
                                <Option value="master">Master</Option>
                            </Select>
                        </label>
                    </div>
                </FlexDiv>
                <div className={Style.buttonsDiv}>
                    <button type="primary" onClick={() => this.props.addButonHndlr()} className={Style.prevButton}>Chanel</button>
                    <button disabled={!btnCheck} type="primary" onClick={() => this.props.nextStep(1)} 
                    className={Style.nextButton + ' ' + (!btnCheck ? Style.disable : '')}>Next Step</button>
                </div>
            </div>
        );
    }
}

export default FirstStep;
import React, { Component } from "react";
import MyBankCard from "./components/MyBankCard";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import Style from './components/steps.module.scss';
import styled from 'styled-components';
import { Animated } from "react-animated-css";
import AddButton from "./img/ui.png";
// import { CSSTransition } from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'


import { Steps } from 'antd'
import FinalStep from "./components/FinalStep";

const { Step } = Steps;


class App extends Component {
  state = {
    nameFocuse: false,
    numFocuse: false,
    dateFocuse: false,

    typeFocuse: false,
    bankFocuse: false,

    cvvFocuse: false,

    flipCard: false,

    leftContVisib: false,
    righttContVisib: false,

    start: false,

    buttonChec: true,
    currentStep: 0,
    width: "50%",

    obj: {
      name: "",
      number: "",
      expireDate: "01/21",
      bank: 'Pasha Bank',
      bankName: undefined,
      cardType: 'visa',
      type: "DEBIT",
      pin: "0000",
      cvv: ""
    }
  }


  fullWidth = () => {
    this.setState({ width: "100%" });
  }

  chanceLeftContVisib = () => {
    this.setState({ leftContVisib: false });
    this.fullWidth();
  }

  setCardType = (newCardType) => {
    this.setState({
      obj: { ...this.state.obj, cardType: newCardType }
    });
  }

  setBankName = (bank, newBankName) => {
    this.setState({
      bank: bank,
      obj: { ...this.state.obj, bankName: newBankName, bank: bank }
    });
  }


  setExpireDate = (newExpireDate) => {
    this.setState({
      obj: { ...this.state.obj, expireDate: newExpireDate }
    });
  }

  setNumber = (newNumber) => {
    this.setState({
      obj: { ...this.state.obj, number: newNumber }
    });
  }

  setName = (newName) => {
    this.setState({
      obj: { ...this.state.obj, name: newName }
    });
  }

  setCvv = (newCvv) => {
    this.setState({ obj: { ...this.state.obj, cvv: newCvv } });
  }

  focuseName = () => {
    this.setState({
      nameFocuse: !this.state.nameFocuse
    })
  }

  focuseNum = () => {
    this.setState({
      numFocuse: !this.state.numFocuse
    })
  }

  focuseDate = (boll) => {
    this.setState({
      dateFocuse: boll
    })
  }

  focuseType = (boll) => {
    this.setState({
      typeFocuse: boll
    })
  }

  focuseBank = (boll) => {
    this.setState({
      bankFocuse: boll
    })
  }

  focuseCvv = (boll) => {
    this.setState({
      cvvFocuse: boll
    })
  }

  nextStep = (step) => {
    this.setState({
      flipCard: !this.state.flipCard,
      currentStep: step
    })
  }

  addButonHndlr = () => {
    this.setState({
      leftContVisib: this.state.buttonChec,
      righttContVisib: this.state.buttonChec,
      // start: false,
      buttonChec: !this.state.buttonChec,
    });

    setTimeout(() => { this.setState({ start: true }) }, 500);
  }

  render() {
    let width = this.state.width;

    return (
      <div className="App" >
        <Animated className="add-button" isVisible={this.state.buttonChec}>
          <img src={AddButton} alt="add btton" onClick={this.addButonHndlr} style={{ width: '80px' }} />
        </Animated>
        <Animated className="left-side-div" animationIn="fadeInLeftBig" animationOut="fadeOutLeftBig" isVisible={this.state.leftContVisib}>
          <div className="steps-container">
            <Steps direction="vertical" size="small" current={this.state.currentStep}>
              <Step title="Шаг 1" description="Заполнение лицевой стороны." />
              <Step title="Шаг 2" description="Заполнение второй стороны." />
              <Step title="Подтвердить" description="Показать результат." />
            </Steps>
          </div>
          <div className="input-forms-container">
            <Animated animationIn="fadeInDownBig" animationOut="fadeOut" isVisible={this.state.start && this.state.currentStep === 0}>
              <FirstStep
                focuseName={this.focuseName}
                focuseNum={this.focuseNum}
                focuseDate={this.focuseDate}

                focuseType={this.focuseType}
                focuseBank={this.focuseBank}

                setName={this.setName}
                name={this.state.obj.name}

                setNumber={this.setNumber}
                number={this.state.obj.number}

                setExpireDate={this.setExpireDate}
                setBankName={this.setBankName}

                nextStep={this.nextStep}

                currentStep={this.state.currentStep}

                setCardType={this.setCardType}

                addButonHndlr={this.addButonHndlr}
              />
            </Animated>
            <Animated animationIn="fadeInDownBig" animationOut="fadeOut" isVisible={this.state.currentStep === 1}>
              <SecondStep
                focuseCvv={this.focuseCvv}
                currentStep={this.state.currentStep}
                setCvv={this.setCvv}
                cvv={this.state.obj.cvv}
                nextStep={this.nextStep}
              />
            </Animated>
            <Animated animationIn="fadeInDownBig" animationOut="fadeOut" isVisible={this.state.currentStep === 2}>
              <FinalStep
                currentStep={this.state.currentStep}
                obj={this.state.obj}
                nextStep={this.nextStep}
                chanceLeftContVisib={this.chanceLeftContVisib}
              />
            </Animated>
          </div>
        </Animated>
        <Animated className='float-right' style={{ width: width }} animationIn="fadeInRightBig" animationOut="fadeOutRightBig" isVisible={this.state.righttContVisib}>
          <div>
            <MyBankCard
              nameFocuse={this.state.nameFocuse}
              numFocuse={this.state.numFocuse}
              dateFocuse={this.state.dateFocuse}
              typeFocuse={this.state.typeFocuse}
              bankFocuse={this.state.bankFocuse}
              cvvFocuse={this.state.cvvFocuse}
              flipCard={this.state.flipCard}
              obj={this.state.obj}
            />
          </div>
        </Animated>
      </div>
    );
  }
}

export default App;

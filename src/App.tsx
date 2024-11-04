import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./button/Button";
import {Input} from "./input/Input";


import {ThemeProvider} from 'styled-components';
import {
  GlobalStyle,
  Container,
  StyledInput, StyledSpan
} from './styles/Styles';
import {theme} from "./styles/theme";

export const error = "incorrect value!"
function App() {
  let [startValue, setStartValue] = useState<number>(() =>{
    const savedStartValue = localStorage.getItem('startValue');
    return savedStartValue !==null? JSON.parse(savedStartValue) : 0;
  })
  let [currentValue, setCurrentValue] = useState<number>(startValue)
  let [maxValue, setMaxValue] = useState<number>(() => {
    const savedMaxValue = localStorage.getItem('maxValue');
    return savedMaxValue !== null? JSON.parse(savedMaxValue) : 0;
  })
  let [isSetButtonDisabled, setSetButtonDisabled] = useState(true)
  let [errorMessage, setErrorMessage] = useState('')
  let [settingMessage, setSettingMessage] = useState('')
  let [isIncButtonDisabled, setIncButtonDisabled] = useState(false)
  let [isResetButtonDisabled, setResetButtonDisabled] = useState(false)

  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
  },[startValue]);
  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [maxValue])

  let onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMaxValue = Number(e.currentTarget.value);
    setSettingMessage("enter values and press 'set'");
    if (inputMaxValue >= 0 && startValue >= 0 ) {
      setSetButtonDisabled(false);
      setMaxValue(inputMaxValue)
      setErrorMessage('');
    } else {
      setSettingMessage('')
      setMaxValue(inputMaxValue)
      setSetButtonDisabled(true);
      setErrorMessage(error);
    }
    // Disable inc and reset buttons while setting new values
    setIncButtonDisabled(true);
    setResetButtonDisabled(true);
  };

  let onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputStartValue = Number(e.currentTarget.value)
    setSettingMessage("enter values and press 'set'");
    if (inputStartValue >= 0  && inputStartValue < maxValue) {
      setSetButtonDisabled(false);
      setStartValue(inputStartValue)
      setErrorMessage('');

    } else {
      setSettingMessage('')
      setStartValue(inputStartValue)
      setSetButtonDisabled(true);
      setErrorMessage(error);
    }
    // Disable inc and reset buttons while setting new values
    setIncButtonDisabled(true);
    setResetButtonDisabled(true);
  }
  const onClickAddCount = () => {
    if (errorMessage) {
      setIncButtonDisabled(true);
    } else if (currentValue + 1 < maxValue) {
      setCurrentValue(currentValue + 1);
      setIncButtonDisabled(false);
    } else {
      setCurrentValue(currentValue + 1);
      setIncButtonDisabled(true);
    }
  };

  const onClickReset = () => {
    setCurrentValue(startValue)
    setIncButtonDisabled(false)
    if (errorMessage) {
      setResetButtonDisabled(true)
    }
  }
  const onClickSet = () => {
    setSettingMessage('')
    setCurrentValue(startValue)
    setSetButtonDisabled(true)
    setIncButtonDisabled(false)
    setResetButtonDisabled(false)
    if (errorMessage) {
      setSetButtonDisabled(true)
    }
  }
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {/*Wrap container*/}
        <Container
            flexDirection='row'
            justifyContent='space-between'
            minHeight='100%'
            maxWidth= '980px'

            border='none'
        >
          {/*Left external container */}
          <Container
              flexDirection='column'
              width='100%'
              flex="1"
              padding='30px'
          >
            {/*Left Internal container */}
            <Container
                alignSelf='stretch'
                width='100%'
                flexDirection='column'
            >
              {/*Internal Settings container maxValue */}
              <Container
                  width='100%'
                  padding='0'
                  border='none'
              >
                <StyledSpan> max value</StyledSpan>
                <Input
                    type='number'
                    value={maxValue}
                    onChange={onChangeMaxInputHandler}
                    hasError={!!errorMessage} // Передаем значение hasError
                />
              </Container>
              {/*Internal settings start Value container*/}
              <Container
                  width='100%'
                  border='none'
                  padding='0'
              >
                <StyledSpan> start value</StyledSpan>
                <Input
                    type='number'
                    value={startValue}
                    onChange={onChangeStartInputHandler}
                    hasError={!!errorMessage} // Передаем значение hasError
                />
              </Container>
            </Container>
            {/*Set button container*/}
            <Container
                flex='1'
                width='100%'
            >
              <Button
                  onClick={onClickSet}
                  disabled={isSetButtonDisabled}
              >
                set
              </Button>
            </Container>
          </Container>
          {/* Right external container*/}
          <Container
              flex='1'
              flexDirection='column'
              width='100%'
              padding='30px'
              alignSelf='stretch'
          >

            {/*Tableau container*/}
            <Container
                flex='2'
                width='100%'

            >
              {settingMessage ? (
                  <StyledSpan color={theme.colors.secondary}>
                    {settingMessage}
                  </StyledSpan>
              ) : errorMessage ? (
                  <StyledSpan color={theme.colors.errorColor}>
                    {errorMessage}
                  </StyledSpan>
              ) : (
                  <StyledSpan
                      fontSize="4em"
                      color={currentValue === maxValue && currentValue > 0 ? theme.colors.errorColor : theme.colors.secondary}
                      isMediaIncreaseFontSize={true}
                  >
                    {currentValue}
                  </StyledSpan>
              )}

            </Container>
            {/*Inc-Reset buttons container*/}
            <Container
                width='100%'
            >
              <Button
                  onClick={onClickAddCount}
                  disabled={isIncButtonDisabled}
              >
                inc
              </Button>

              <Button

                  onClick={onClickReset}
                  disabled={isResetButtonDisabled}
              >
                reset
              </Button>
            </Container>
          </Container>
        </Container>
      </ThemeProvider>
  );
}

export default App;


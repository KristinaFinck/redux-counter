import {useDispatch, useSelector} from "react-redux";
import React, {ChangeEvent, useEffect,} from 'react';
import {Button} from "./button/Button";
import {Input} from "./input/Input";

import {ThemeProvider} from 'styled-components';
import {
    GlobalStyle,
    Container,
    StyledInput, StyledSpan
} from './styles/Styles';
import {theme} from "./styles/theme";

import {addCountAC, maxValueAC, onClickSetAC, resetCountAC, startValueAC} from './store/actionsCreators';
import {RootStateType} from "./store/store";

export const AppWithRedux = () => {
    let dispatch = useDispatch();
    // Получение значений состояния из Redux
    const maxValue = useSelector((state: RootStateType) => state.counter.maxValue);
    const startValue = useSelector((state: RootStateType) => state.counter.startValue);
    const errorMessage = useSelector((state: RootStateType) => state.counter.errorMessage);
    const isSetButtonDisabled = useSelector((state: RootStateType) => state.counter.isSetButtonDisabled);
    const isIncButtonDisabled = useSelector((state: RootStateType) => state.counter.isIncButtonDisabled);
    const isResetButtonDisabled = useSelector((state: RootStateType) => state.counter.isResetButtonDisabled);
    const settingMessage = useSelector((state: RootStateType) => state.counter.settingMessage);
    const currentValue = useSelector((state: RootStateType) => state.counter.currentValue);

    const onClickReset = () => {
        dispatch(resetCountAC());
    }
    const onClickSet = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));


        dispatch(onClickSetAC());
    }
    const onClickAddCount = () => {
        dispatch(addCountAC());
    }
    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputMaxValue = Number(e.currentTarget.value);
        dispatch(maxValueAC(inputMaxValue));
    }
    const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputStartValue = Number(e.currentTarget.value)
        dispatch(startValueAC(inputStartValue));
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
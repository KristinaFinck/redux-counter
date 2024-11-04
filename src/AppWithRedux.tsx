import {useDispatch} from "react-redux";
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

import {addCountAC, maxValueAC, onClickSetAC, resetCountAC} from './store/actionsCreators';

export const AppWithRedux = () => {
    let dispatch = useDispatch();
    let error = "incorrect value!"
    const onClickReset = () => {
        dispatch(resetCountAC());
    }
    const onClickSet = () => {
        dispatch(onClickSetAC());
    }
    const onClickAddCount = () => {
        dispatch(addCountAC());
    }
    const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputMaxValue = Number(e.currentTarget.value);
        dispatch(maxValueAC(inputMaxValue));
    }
}

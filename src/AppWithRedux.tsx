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

import {onClickSetAC, resetCountAC} from './store/actionsCreators';

export const AppWithRedux = () => {
    let dispatch = useDispatch();

  const onClickReset = () => {
        dispatch(resetCountAC())
    }
    const onClickSet = () => {
      dispatch(onClickSetAC())
    }
}
import {useDispatch} from "react-redux";
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

import { resetCountAC } from './store/actionsCreators';
import {useState} from "react"; // путь к actions.js

export const AppWithRedux = () => {
    let dispatch = useDispatch();

 export const onClickReset = () => {
        dispatch(resetCountAC)
    }
}
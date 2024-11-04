import {ChangeEvent} from "react";
import {error} from "../App";

const initialState = {
    startValue: 0,        // начальное значение счетчика
    currentValue: 0,      // текущее значение счетчика
    maxValue: 0,          // максимальное значение счетчика
    isSetButtonDisabled: true,   // состояние кнопки "set"
    errorMessage: '',            // сообщение об ошибке
    settingMessage: '',          // сообщение для настройки значений
    isIncButtonDisabled: true,  // состояние кнопки "inc"
    isResetButtonDisabled: true // состояние кнопки "reset"
};
export const counterReducer = (state = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'RESET_COUNT':
            return {
                ...state,
                currentValue: state.startValue,  // Сброс текущего значения к startValue
                isIncButtonDisabled: false,  // Кнопка inc активна
                isResetButtonDisabled: state.errorMessage ? true : false // Кнопка reset неактивна, если есть сообщение об ошибк
            }
        case 'CLICK_SET':
            return {
                ...state,
                settingMessage: '',
                currentValue: state.startValue,
                isIncButtonDisabled: false,
                isResetButtonDisabled: false,
                isSetButtonDisabled: state.errorMessage ? true : false
            };
        case 'ADD_COUNT':
            return {
                ...state,
                isIncButtonDisabled: (state.errorMessage || state.currentValue + 1 >= state.maxValue) ? true : false,
                currentValue: state.currentValue < state.maxValue
                    ? state.currentValue + 1
                    : state.currentValue
            }
        case 'SET_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload, // Устанавливаем maxValue из payload
                settingMessage: action.payload >= 0 && action.payload > state.startValue ? "enter values and press 'set'" : '',
                isSetButtonDisabled: action.payload > state.startValue && state.startValue >= 0 ? false : true,
                errorMessage: action.payload > 0 || state.startValue < action.payload ? '' : error,
            }
        default:
            return state
    }

}

export type CounterStateType = {
    startValue: number
    currentValue: number
    maxValue: number
    isSetButtonDisabled: boolean
    errorMessage: string
    settingMessage: string
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
}
export type ActionType = {
    type: string
    payload?: any
}

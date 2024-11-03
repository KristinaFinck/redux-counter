import {ChangeEvent} from "react";

const initialState = {
    startValue: 0,        // начальное значение счетчика
    currentValue: 0,      // текущее значение счетчика
    maxValue: 0,          // максимальное значение счетчика
    isSetButtonDisabled: true,   // состояние кнопки "set"
    errorMessage: '',            // сообщение об ошибке
    settingMessage: '',          // сообщение для настройки значений
    isIncButtonDisabled: false,  // состояние кнопки "inc"
    isResetButtonDisabled: false // состояние кнопки "reset"
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
                isIncButtonDisabled: (state.errorMessage || state.currentValue + 1 >= state.maxValue) ? true: false,
                currentValue:  state.currentValue < state.maxValue
                    ? state.currentValue +1
                    : state.currentValue
            }
        default: return state
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

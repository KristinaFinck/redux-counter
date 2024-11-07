
import type {ActionType} from "./actionsCreators";
import {RootStateType} from "./store";

let savedStartValue = localStorage.getItem('startValue');
savedStartValue  =  savedStartValue !==null? JSON.parse(savedStartValue) : 0;

let savedMaxValue = localStorage.getItem('maxValue');
savedMaxValue = savedMaxValue !== null? JSON.parse(savedMaxValue) : 0;


const initialState = {
    startValue: savedStartValue ? +savedStartValue : 0,        // начальное значение счетчика
    currentValue: savedStartValue ? +savedStartValue : 0,      // текущее значение счетчика
    maxValue: savedMaxValue ? +savedMaxValue : 0,          // максимальное значение счетчика
    isSetButtonDisabled: false,   // состояние кнопки "set"
    errorMessage: '',            // сообщение об ошибке
    settingMessage: '',          // сообщение для настройки значений
    isIncButtonDisabled: true,  // состояние кнопки "inc"
    isResetButtonDisabled: true // состояние кнопки "reset"
};
export const  error = "incorrect value!"
export const message = "enter values and press 'set'"
export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
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
                isSetButtonDisabled: true
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
                settingMessage: action.payload >= 0 && action.payload >= state.startValue ? message : '',
                isSetButtonDisabled: action.payload > state.startValue && action.payload >= 0 ? false : true,
                errorMessage: action.payload <= 0 || state.startValue > action.payload ? error : '',
            }
        case 'SET_START_VALUE':
            return {
                ...state,
                startValue: action.payload,
                settingMessage: action.payload >= 0 && action.payload <= state.maxValue ? message : '',
                isSetButtonDisabled: action.payload < state.maxValue && action.payload >= 0 ? false : true,
                errorMessage: action.payload < 0 || action.payload > state.maxValue? error : '',
            }
        default:
            return state
    }

}
export type InitialStateType = {
    startValue: number
    currentValue: number
    maxValue: number
    isSetButtonDisabled: boolean
    errorMessage: string
    settingMessage: string
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
}

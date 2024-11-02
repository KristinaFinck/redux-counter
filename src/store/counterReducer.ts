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
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET_COUNT':
            return {
                ...state,
                currentValue: state.startValue,  // Сброс текущего значения к startValue
                isIncButtonDisabled: false,  // Кнопка inc активна
                isResetButtonDisabled: state.errorMessage ? true : false // Кнопка reset неактивна, если есть сообщение об ошибк
            }

    }
}
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
const counterReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}